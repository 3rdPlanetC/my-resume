const passport = require('passport')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = mongoose.model('User')

module.exports = (server, app) => {

    passport.serializeUser((user, done) => {
        done(null, user)
    })
    
    passport.deserializeUser((id, done) => {
        User.findById(id).then(user => {
            done(null, user)
        })
    })

    server.post('/api/login', (req, res, next) => {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if (err) return next(err)
            if(user) {
                const token = jwt.sign(user.toJSON(), 'hello world', {expiresIn:30})
                req.session = {user, token, 
                    status: true,
                    message: "Login Successfuly."
                }
                return res.status(200).json({user, token, 
                    status: true,
                    message: "Login Successfuly.",
                    session: req.session
                })
            } else {
                res.status(200).send({
                    status: false,
                    message: info
                })
             }
        })(req, res, next)
    })

    server.post('/api/signup', (req, res) => {
        try {
            const { username, password } = req.body
            User.findOne({username: username}).then(existingUser => {
                if (existingUser) {
                    res.status(200).json({
                        staus: false,
                        message: "Username has been already exist."
                    })
                }
                bcrypt.hash(password, 10, (err, hash) => {
                    new User({
                        username: username,
                        password: hash,
                    }).save().then(() => {
                        res.status(200).json({
                            status: true,
                            message: "Signup Successfully."
                        })
                    })
                })
            })
        } catch (error) {
            console.log(error)
        }
    })

    server.get('/api/current_user', (req, res) => {
        res.send(req.session)
    })
}