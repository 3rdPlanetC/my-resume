// import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import keys from '../../server/config/keys'
import passport from 'passport'
const User = mongoose.model('User')

export default async function login(req, res, next) {
	passport.authenticate('local', (err, user, info) => {
		if (err) return next(err)
		if(user) {
			const token = jwt.sign({
				sub: user.toJSON(),
				iat: new Date().getTime()
			}, 'asd', {expiresIn:30})
			// return res.status(200).json({user, token, 
			// 	status: true,
			// 	message: "Login Successfuly.",
			// })
			console.log("has user")
		} else {
			// return res.status(200).send({
			// 	status: false,
			// 	message: info
			// })
			console.log("hasn't user")
		}
	})(req, res, next)
}

// const Hello = (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

// export default Hello
