// Import Library
const express = require('express')
const next = require('next')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

// Middlewares
const keys = require('./config/keys')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

// Express Middlewares
app.prepare()
    .then(() => {
        const server = express()
        server.use(express.json())
        // Cookie Session
        server.use(cookieSession({
            maxAge: 1000*60*15,
            keys: [keys.cookieKeys]
        }))
        // Cookie Parser
        server.use(cookieParser())
        // MongoDB
        require('./models/User')
        mongoose
            .connect(keys.mongoURI, { 
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true
            })
            .then(() => console.log('> Database Ready on Mlab'))
            .catch(err => console.error(err))
        // Body Parser 
        server.use(bodyParser.json({ limit: '5mb' }))
        server.use(bodyParser.urlencoded({ extended: true }))
        // Passport Initialize
        require('./service/passport')
        server.use(passport.initialize())
        server.use(passport.session())
        // Routes
        require('./routes/pagesRoutes')(server, app)
        require('./routes/authRoutes')(server, app)
        // Fix
        server.all('*', (req, res) => {
            return handle(req, res)
        })
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Server Ready on http://localhost:${port}`)
        })
    }
)