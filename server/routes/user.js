const passport = require('passport')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (server, app) => {
    server.post('/api/login', (req, res, next) => {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if (err) return next(err)
            if(user) {
                const token = jwt.sign(user, 'your_jwt_secret')
                return res.json({user, token})
            } else {
                return res.status(422).json(info)
            }
        })
    })
    server.post('/api/signup', (req, res, next) => {
        try {
            const { username, password, confirmPassword } = req.body
            console.log(username, password, confirmPassword)

            User.findOne({username: username}).then(user => {
                if (user) {
                    console.log("this user has already signup.")
                } else {
                    new User({
                        username: username,
                        password: password
                    }).save().then(() => {
                        console.log("now!! user has been signup.")
                    })
                }
            })
            // if (existingUser) {
            //     done(null, existingUser)
            // }
            // const user = await new User({
                // \
                // googleId: profile.id}).save()

            
            // done(null, user)
            res.status(200).send({
                status: 200,
                message: "Signup Successfully"
            })
        } catch (error) {
            // res.status(500).send({
            //     status: 500,
            //     message: "Signup Error"
            // })
            console.log(error)
        }
    })
}