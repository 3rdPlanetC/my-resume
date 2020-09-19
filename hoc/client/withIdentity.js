import Router from 'next/router'
import { useContext, createContext, Component } from 'react'
import nextCookie from 'next-cookies'

const Context = createContext({})

export default App => {
    const IdentityProvider = props => {
        return (
            // <Context.Provider value={session}>
                <App {...props}/>
            // </Context.Provider>
        )
    }

    IdentityProvider.getInitialProps = async ({ctx}) => {
        const { passportSession } = nextCookie(ctx)
        if (passportSession) {
            const serializedCookie = Buffer.from(passportSession, 'base64').toString()
            const { passport: { user } } = JSON.parse(serializedCookie)
            console.log(user)
        //     if (ctx.pathname === '/login' || typeof window !== 'undefined' && window.location.pathname === loginPage) {
        //         return
        //     } else {
        //         ctx.res.writeHead(303, { Location: '/login' })
        //         ctx.res.end()
        //         return Promise.resolve({
        //             pageProps: null,
        //             session: null,
        //         })
        //     }
            return {

            }
        }
        return {

        }
    }

    return IdentityProvider
}

export const useIdentity = () => useContext(Context)