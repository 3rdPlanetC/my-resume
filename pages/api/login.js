
// import passport from 'passport'
// import cookieSession from 'cookie-session'
// import cookieParser from 'cookie-parser'
// import mongoose from 'mongoose'
// import { Strategy as LocalStrategy } from 'passport-local'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import keys from '../../config'
// import { User } from '../../models'
// const server = nextConnect()

// server.use(cookieParser())
// server.use(cookieSession({
//     maxAge: 1000*60*60,
//     keys: [keys.cookieKeys]
// }))

// server.use(passport.initialize())
// server.use(passport.session())

// passport.serializeUser((user, done) => {
//     done(null, user.id)
// })

// passport.deserializeUser((id, done) => {
//     User.findById(id).then(user => {
//         done(null, user)
//     })
// })


// passport.use(new LocalStrategy(
//     (username, password, done) => {
//         User.findOne({ username: username }).then(user => {
//             if (!user) {
//                 return done(null, false, {message: 'Incorrect username or password.' })
//             } else {
//                 bcrypt.compare(password, user.password, (err, matchPassword) => {
//                     if (matchPassword) {
//                         return done(null, user)
//                     }
//                     return done(null, false, {message: 'Incorrect password.' })
//                 })
//             }
//         }).catch(err => done(err))
//     }
// ))

// server.use((req, res, next) => {
//     mongoose
//         .connect(keys.mongoURI, {
//             useNewUrlParser: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//         })
//         .then(() => {
//             console.log('> Database Ready on Mlab')
//             next()
//         })
//         .catch(err => console.error(err))
// })

// midleware test
// server.use((req, res, next) => {
//     console.log("middleware pass")
//     next()
    // if (req.url.includes('/login')) {
    //     if (req.user) {
    //         return res.redirect('/admin')
    //     } else {
    //         return next()
    //     }
    // } else {
    //     if (req.user) {
    //         return next()
    //     } else {
    //         return res.redirect('/login')
    //     }
    // }    
// })

// server.post((req, res, next) => {
//     passport.authenticate('local', (err, user, info) => {
//         if (err) return next(err)
//         if (user) {
//             const token = jwt.sign({
//                 payload: user.toJSON(),
//                 iat: new Date().getTime()
//             }, keys.tokenSecret, { expiresIn: 3600 })
//             res.writeHead(200, ({'Set-Cookie':`token=${token}; HttpOnly`}))
//         } else {
//             res.status(200).send({
//                 status: false,
//                 message: info.message
//             })
//         }
//     })(req, res, next)
// })

import cookie from 'cookie'
import nextConnect from 'next-connect'
import jwt from 'jsonwebtoken'
import { mongoose } from '../../middlewares'
import { User } from '../../models'
import keys from '../../config'
import bcrypt from 'bcrypt'
import Cryptr from 'cryptr'

export default nextConnect()
.post(async (req, res) => {
    mongoose.connect()
    const { username, password} = req.body
    const cryptr = new Cryptr(keys.tokenSecret)
    const user = await User.findOne({username: username})
    if (!user) {
        res.status(200).send({
            status: false,
            message: 'Incorrect username or password.'
        })
        await mongoose.disconnect()
    } else {
        bcrypt.compare(password, user.password, (err, matchPassword) => {
            if (matchPassword) {
                const accessToken = jwt.sign({
                    payload: user.toJSON(),
                    iat: new Date().getTime()
                }, keys.tokenSecret, { expiresIn: 3600})
                const refreshToken = cryptr.encrypt(accessToken)
                res.setHeader('Set-Cookie', cookie.serialize('access_token', `Bearer ${accessToken}`, {
                    httpOnly: true,
                    maxAge: 60 * 60,
                }))
                res.status(200).send({
                    status: true,
                    message: 'Login Success.',
                    user: user,
                    token: refreshToken
                })
                mongoose.disconnect()
            } else {
                res.status(200).send({
                    status: false,
                    message: 'Incorrect password.'
                })
                mongoose.disconnect()
            }
        })
    }
})