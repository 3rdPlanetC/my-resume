exports.loginMiddleware = (req, res, next) => {
    switch (req.url) {
        case '/login':
            if (req.user) {
                return res.redirect('/dashboard')
            } else {
                return next()
            }
        case '/dashboard':
            if (req.user) {
                return next()
            } else {
                return res.redirect('/login')
            }
        default:
            return next()
    }
}