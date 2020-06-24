const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (server, app) => {
    server.get('/api/user/list', (req, res) => {
        
    })
}