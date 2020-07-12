import mongoose, { Schema } from 'mongoose'

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

export default mongoose.model('User', UserSchema)