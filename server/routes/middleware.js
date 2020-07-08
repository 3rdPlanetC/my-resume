exports.loginMiddleware = (req, res, next) => {
    if (req.url.includes('/login')) {
        if (req.user) {
            return res.redirect('/admin')
        } else {
            return next()
        }
    } else {
        if (req.user) {
            return next()
        } else {
            return res.redirect('/login')
        }
    }    
}