const passport = require('passport')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const passportJWT = require("passport-jwt")
const LocalStrategy = require('passport-local').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
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
    {passReqToCallback : true},
    (req, username, password, done) => {
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

passport.use(new FacebookStrategy(
    {
        clientID: '729856777760887',
        clientSecret: '8ec3fd9227c8170e162da0ad7f96a017',
        callbackURL: "http://localhost:5000/auth/facebook/callback"
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ username: profile.id }).then((err, existingUser) => {
            if (existingUser) {
                done(null, existingUser)
            } else {
                new User({
                    // ...profile,
                    username: profile.id,
                    password: '1234'
                }).save().then(result => {
                    done(err, result)
                })
            }
        })
    }
))

passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'asd'
    }, 
    (jwtPayload, done) => {
        console.log(jwtPayload.id)
        return User.findById(jwtPayload.id)
            .then(user => {
                return done(null, user)
            })
            .catch(err => {
                return done(err)
            })
    }
))