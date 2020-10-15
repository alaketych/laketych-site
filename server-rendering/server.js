const express = require('express')
const next = require('next')
const routes = require('./routes/index')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)
const port = 8000

app.prepare()
    .then(() => {
        const server = express()
        server.use(handler)

        server.get('*', (request, response) => {
            handle(request, response)
        })

        server.listen(port, error => {
            if(error) throw error
            console.log(`> Ready on http://localhost:${port}`);
        })
    })