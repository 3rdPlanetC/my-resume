import { useContext, createContext, Component } from 'react'
import nextCookie from 'next-cookies'

const Context = createContext({})

export default (NextApp) => {
    const IdentityProvider = props => {
        return (
            // <Context.Provider>
                <NextApp {...props}/>
            // </Context.Provider>
        )
    }

    IdentityProvider.getInitialProps = async ({ctx}) => {
        const { passportSession } = nextCookie(ctx)
        console.log(passportSession)
        // get cookie passportSession and deserialize from Buffer to String then send to Provider
        return {
            props: {

            }
        }
    }

    return IdentityProvider
}