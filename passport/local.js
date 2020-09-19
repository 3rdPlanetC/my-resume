import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import { User } from '../models'

export default new LocalStrategy(
    async (username, password, done) => {
        const user = await User.findOne({username : username}).exec()
        if (user.password === password) {
            console.log("match!")
            return done(null, user)
        } else {
            console.log("not match!")
        }
    }
)