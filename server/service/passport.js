const passport = require('passport')
// const JWTStrategy = require("passport-jwt").Strategy
// const ExtractJWT = require('passport-jwt').ExtractJWT
const User = require('../models/User')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    })
})

passport.use(new LocalStrategy( 
    async (username, password, cb) => {             
        return User.findOne({username, password}).then(user => {
            if (!user) {
                return cb(null, false, {message: 'Incorrect email or password.'})
            }               
            return cb(null, user, {message: 'Logged In Successfully'})
        }).catch(err => cb(err))
    }
))

// passport.use(new JWTStrategy({
//         jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//         secretOrKey   : 'your_jwt_secret'
//     },
//     (jwtPayload, cb) => {
//         return User.findOneById(jwtPayload.id).then(user => {
//             return cb(null, user)
//         })
//         .catch(err => cb(err))
//     })
// )