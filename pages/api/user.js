import { withPassport } from '../../hoc/server'
import { Database } from '../../middlewares'

const user = async (req, res) => {
    await Database.connect()
    if (req.user) {
        res.send(req.user)
    } else {
        res.status(200).send({
            status: 401,
            message: "Unauthorization"
        })
    }
}

export default withPassport(user)