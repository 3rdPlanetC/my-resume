import mongoose from 'mongoose'
import keys from '../config'

export default  {
    connect: async () => {
        mongoose
            .connect(keys.mongoURI, {
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
            })
            .then(() => {
                console.log('> Database Connected on Mlab.')
            })
            .catch(err => console.error(err))
    },
    disconnect: async () => {
        mongoose
            .disconnect()
            .then(() => {
                console.log('> Database Disconnected.')
            })
    }
    
}