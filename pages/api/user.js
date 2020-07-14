import { withPassport } from '../../hoc/server'
import { Database } from '../../middlewares'

const user = async (req, res) => {
    if (!req.user) {
        res.status(200).send({
            status: 401,
            message: "Unauthorization"
        })
    }
    res.send(req.user)
}

export default withPassport(user)