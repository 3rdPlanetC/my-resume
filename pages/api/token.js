import nextConnect from 'next-connect'

export default nextConnect()
.get((req, res) => {
    console.log('Cookies: ', req.cookies)
    console.log('Signed Cookies: ', req.signedCookies)
})