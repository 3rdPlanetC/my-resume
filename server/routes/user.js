const passport = require('passport')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = mongoose.model('User')

module.exports = (server, app) => {
    // Local Login
    server.post('/api/login', (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) return next(err)
            if(user) {
                const token = jwt.sign({
                    sub: user.toJSON(),
                    iat: new Date().getTime()
                }, 'asd', {expiresIn:30})
                return res.status(200).json({user, token, 
                    status: true,
                    message: "Login Successfuly.",
                })
            } else {
                res.status(200).send({
                    status: false,
                    message: info
                })
             }
        })(req, res, next)
    })
    // Local Signup
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


    // Testing
    server.get('/api/user', (req, res, next) => {
        res.send(req.session)
    })

    server.get('/api/cookies', (req, res, next) => {
        res.send({
            'signed': req.signedCookies,
            'unsigned': req.cookies
        })
    })

    server.get('/auth/facebook', 
        passport.authenticate('facebook', { 
            scope: ['email'] 
        })
    )

    server.get('/auth/facebook/callback', passport.authenticate('facebook', { 
        failureRedirect: '/login' 
    }), (req, res) => {
        res.redirect('/')
    })

    server.get('/user', 
        passport.authenticate('jwt'), (req, res) => {
            res.send('hello world')
        }
    )
}