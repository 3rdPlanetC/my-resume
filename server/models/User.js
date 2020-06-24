const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    facebookId: { type: String },
    username: { type: String },
    password: { type: String },
    displayName: { type: String },
    gender: { type: String },
}, {
    timestamps: true,
    collection: 'User'
})

mongoose.model('User', UserSchema)