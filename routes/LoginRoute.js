import jwt from 'jsonwebtoken'
import passport from 'passport'
import cookie from 'cookie'
import keys from '../config'

export default (req, res) => {
    passport.authenticate('local')(req, res, () => {
        const { user } = req
        const token = jwt.sign({
            payload: user.toJSON(),
            iat: new Date().getTime()
        }, keys.tokenSecret, { expiresIn: 3600 })
        res.setHeader('Set-Cookie', cookie.serialize('access_token', `Bearer ${token}`, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
        }))
        res.status(200).send({
            status: true,
            token: token,
            message: "Login Success."
        })
    })
}