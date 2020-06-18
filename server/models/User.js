const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
}, {
    timestamps: true,
    collection: 'User'
})

mongoose.model('User', UserSchema)