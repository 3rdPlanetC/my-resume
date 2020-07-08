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
    server.get('/blog/:id', (req, res) => {
        return app.render(req, res, '/blog/[id]')
    })
    server.get('/login', loginMiddleware, (req, res) => {
        return app.render(req, res, '/login')
    })
    server.get('/signup', (req, res) => {
        return app.render(req, res, '/signup')
    })
    server.get('/admin', loginMiddleware, (req, res) => {
        return app.render(req, res, '/admin')
    })
    server.get('/admin/blog', loginMiddleware, (req, res) => {
        return app.render(req, res, '/admin/blog')
    })
    server.get('/admin/project', loginMiddleware, (req, res) => {
        return app.render(req, res, '/admin/project')
    })
    server.get('/admin/account', loginMiddleware, (req, res) => {
        return app.render(req, res, '/admin/account')
    })
}