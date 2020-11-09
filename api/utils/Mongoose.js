const mongoose = require('mongoose')
const keys = require('../../config')

module.exports = () => {
    return {
        connect: async () => {
            try {
                if (!mongoose.connection.readyState) {
                    const res = await mongoose.connect(keys.mongoURI, {
                        useNewUrlParser: true,
                        useFindAndModify: false,
                        useCreateIndex: true,
                    })
                    console.log(`> Database has been connected.`)
                } else {
                    console.log(`> Database connected.`)
                }
            } catch (error) {
                res.status(503).send({
                    message: error
                })
            }
        },
        disconnect: async () => {
            try {
                const res = await mongoose.disconnect()
                if (!res) {
                    console.log(`> Database disconnected.`)
                }
            } catch (error) {
                console.log(error)
            }
        },
    }
}