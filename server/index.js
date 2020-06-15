// Import Library
// const admin = require("firebase-admin");
// const functions = require("firebase-functions");
const express = require('express')
const next = require('next')
const config = require('../next.config')
// const cookieSession = require('cookie-session')
// const passport = require('passport')
// const keys = require('./config/keys')
// const FacebookStrategy = require('passport-facebook').Strategy
// const mongoose = require('mongoose')

// Middlewares
// require('./models/User')
// require('./services/passport')
// require('dotenv').config()
// mongoose.connect(keys.mongoURI)
// mongoose.set('useFindAndModify', false);
const port = process.env.port || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ 
	dev,
	// conf: config, 
})
const handle = app.getRequestHandler()

// admin.initializeApp();

// Express Middlewares
app.prepare()
    .then(() => {
        const server = express()
        // Cookie Session
        // server.use(cookieSession({
        //     maxAge: 30*24*60*60,
        //     keys: [keys.cookieKeys]
        // }))
        server.get('/', (req, res) => {
            return app.render(req, res, '/')
        })
        server.get('/post/:slug', (req, res) => {
            return app.render(req, res, '/post', { slug: req.params.slug })
        })
        server.get('/blog', (req, res) => {
            return app.render(req, res, '/blog')
        })
        server.get('/login', (req, res) => {
            return app.render(req, res, '/login')
        })
        // Passport Initialize
        // server.use(passport.initialize())
        // server.use(passport.session())
        // Auth Routes
        // require('./routes/authRoutes')(server)
        // Fix
        server.get('*', (req, res) => {
            return handle(req, res)
        })
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    }
)

// const server = functions.https.onRequest((req, res) => {
//     // console.log("File: " + req.originalUrl)
//     return app.prepare().then(() => {
//         server.get('/', (req, res) => {
//             return app.render(req, res, '/')
//         })
//         server.get('/blog', (req, res) => {
//             return app.render(req, res, '/blog')
//         })
//         server.get('*', (req, res) => {
//             return handle(req, res)
//         })
//     })
// });

// exports.nextjs = { server }