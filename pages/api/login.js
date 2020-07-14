// import nextConnect from 'next-connect'
import { withPassport } from '../../hoc/server'
import { Database } from '../../middlewares'
import LoginRoute from '../../routes/LoginRoute'

const handle = async (req, res) => {
    await Database.connect()
    LoginRoute(req, res)
}

export default withPassport(handle)