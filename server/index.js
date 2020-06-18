// Import Library
const express = require('express')
const next = require('next')
const cookieSession = require('cookie-session')
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Middlewares
const keys = require('./config/keys')
const port = process.env.port || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev,})
const handle = app.getRequestHandler()

// Express Middlewares
app.prepare()
    .then(() => {
        // MongoDB
        mongoose
            .connect(keys.mongoURI, { useNewUrlParser: true,})
            .then(() => console.log('> Database Ready on Mlab'))
            .catch(err => console.error(err))
        mongoose.set('useFindAndModify', false)
        mongoose.set('useCreateIndex', true)
        require('./models/User')
        const server = express()
        // Body Parser 
        server.use(bodyParser.json())
        // Passport Initialize
        server.use(passport.initialize())
        server.use(passport.session())
        require('./service/passport')
        // Cookie Session
        server.use(cookieSession({
            maxAge: 30*24*60*60,
            keys: [keys.cookieKeys]
        }))
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