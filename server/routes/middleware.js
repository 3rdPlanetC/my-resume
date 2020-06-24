exports.loginMiddleware = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        return res.redirect('/login')
    }
}

exports.errorHandler = (err, req, res, next) => {
    let statusCode = err.status || 500
    res.status(statusCode)
    res.json({
        error: {
            status: statusCode,
            message: err.message
        }
    })
}