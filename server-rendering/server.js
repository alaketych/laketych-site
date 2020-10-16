const port = 8000
const express = require('express')
const server = express()

const posts = require('./routes/posts')
const projects = require('./routes/projects')

server.use('/posts', posts)
server.use('/projects', projects)

server.listen(port, error => {
    if(error) throw error
    console.log(`> Ready on http://localhost:${port}`);
})