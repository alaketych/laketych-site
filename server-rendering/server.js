// const port = 8000
// const express = require('express')
// const server = express()

// const posts = require('./routes/posts')
// const projects = require('./routes/projects')

// server.use('/posts', posts)
// server.use('/projects', projects)

// server.listen(port, error => {
//     if(error) throw error
//     console.log(`> Ready on http://localhost:${port}`);
// })

const express = require('express')
const next = require('next')
const routes = require('./routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express()
  server.use(handler)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})