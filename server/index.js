// Import Library
const express = require('express')
const next = require('next')
const cookieSession = require('cookie-session')
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { errorHandler } = require('./routes/middleware')

// Middlewares
const keys = require('./config/keys')
const port = process.env.port || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev,})
const handle = app.getRequestHandler()

// Express Middlewares
app.prepare()
    .then(() => {
        const server = express()
        server.use(express.json())
        // MongoDB
        mongoose
            .connect(keys.mongoURI, { 
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true
            })
            .then(() => console.log('> Database Ready on Mlab'))
            .catch(err => console.error(err))
        require('./models/User')
        // Body Parser 
        server.use(bodyParser.json())
        server.use(bodyParser.urlencoded({ extended: false }))
        // Cookie Session
        require('./service/passport')
        server.use(cookieSession({
            name: 'session',
            maxAge: 30*24*60*60,
            keys: [keys.cookieKeys],
        }))
        // Passport Initialize
        server.use(passport.initialize())
        server.use(passport.session())
        // Routes Middleware
        server.use(errorHandler)
        // Routes
        require('./routes/pages')(server, app)
        require('./routes/user')(server, app)
        // Fix
        server.get('*', (req, res) => {
            return handle(req, res)
        })
        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Server Ready on http://localhost:${port}`)
        })
    }
)