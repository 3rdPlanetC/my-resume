const express = require('express')
const path = require('path')
const { mongoose } = require('./utils')
// const config = require('../config')
const app = express(),
      bodyParser = require("body-parser")
      port = process.env.PORT_SERVER || 5000

app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/connect', (req, res) => {
    mongoose().connect().then(() => {
        console.log("hello world")
    }).then(() => {
        mongoose().disconnect()
    })
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`)
})