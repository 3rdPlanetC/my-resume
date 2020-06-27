const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    facebookId: { type: String },
    username: { type: String, trim: true },
    password: { type: String, trim: true },
    displayName: { type: String },
    gender: { type: String },
}, {
    timestamps: true,
    collection: 'User'
})

mongoose.model('User', UserSchema)