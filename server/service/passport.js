const keys = require('../config')
const passport = require('passport')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const passportJWT = require("passport-jwt")
const LocalStrategy = require('passport-local').Strategy
const JWTStrategy = passportJWT.Strategy
const ExtractJWT  = passportJWT.ExtractJwt

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    })
})

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username: username }).then(user => {
            if (!user) {
                return done(null, false, {message: 'Incorrect username or password.' })
            } else {
                bcrypt.compare(password, user.password, (err, matchPassword) => {
                    if (matchPassword) {
                        return done(null, user)
                    }
                    return done(null, false, {message: 'Incorrect password.' })
                })
            }
        }).catch(err => done(err))
    }
))

passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : keys.tokenSecret
    }, 
    ({ payload, iat }, done) => {
        return User.findById(payload._id)
            .then(user => {
                return done(null, user)
            })
            .catch(err => {
                return done(err)
            })
    }
))