import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import { User } from '../models'

export default new LocalStrategy(
    async (username, password, done) => {
        const user = await User.findOne({username : username})
        bcrypt.compare(password, user.password, (err, matchPassword) => {
            if (matchPassword) {
                return done(null, user)
            }
        })
    }
)