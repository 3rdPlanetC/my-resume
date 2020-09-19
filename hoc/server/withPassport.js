import cookieSession from 'cookie-session'
import passport from 'passport'
import keys from '../../config'
import { local } from '../../passport'
import { User } from '../../models'

passport.use(local)

// passport.serializeUser((user, done) => {
// 	console.log("serialize", user.id)
//     done(null, user.id)
// })

// passport.deserializeUser((id, done) => {
// 	console.log("deserialize", id)
//     User.findById(id).then(user => {
//         done(null, user)
//     })
// })

export default server => async (req, res) => {
    cookieSession({
		name: 'passportSession',
		signed: false,
		maxAge: 1000*60*60,
		keys: [keys.cookieKeys]
	})
	(req, res, () =>
		passport.initialize()(req, res, () =>
			passport.session()(req, res, () =>
				server(req, res)
			)
		)
	)
}