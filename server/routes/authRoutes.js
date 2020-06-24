const keys = require('../config/keys')
const passport = require('passport')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = mongoose.model('User')

module.exports = (server, app) => {
    // Local Login
    server.post('/api/login', (req, res, next) => {
        res.send('hello world')
        // passport.authenticate('local', (err, user, info) => {
        //     if (err) return next(err)
        //     if(user) {
        //         const token = jwt.sign({
        //             payload: user.toJSON(),
        //             iat: new Date().getTime()
        //         }, keys.tokenSecret, { expiresIn: 3600 })
        //         return res.status(200).json({
        //             status: true,
        //             token: token
        //         })
        //     } else {
        //         res.status(401).send({
        //             status: false,
        //             message: info
        //         })
        //      }
        // })(req, res, next)
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
    // Logout
    server.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })
    // JWT Authenticate
    server.get('/api/auth/redirect', passport.authenticate('jwt'), (req, res) => {
        res.status(200).json({
            message: 'Login Successfully.'
        })
    })
}