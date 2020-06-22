const { loginMiddleware } = require('./middleware')

module.exports = (server, app) => {
    server.get('/', (req, res) => {
        return app.render(req, res, '/')
    })
    server.get('/post/:slug', (req, res) => {
        return app.render(req, res, '/post', { slug: req.params.slug })
    })
    server.get('/blog', (req, res) => {
        return app.render(req, res, '/blog')
    })
    server.get('/dashboard', loginMiddleware, (req, res) => {
        return app.render(req, res, '/dashboard')
    })
    server.get('/login', (req, res) => {
        return app.render(req, res, '/login')
    })
    server.get('/signup', (req, res) => {
        return app.render(req, res, '/signup')
    })
}