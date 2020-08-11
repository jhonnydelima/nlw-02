// server
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configure nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// server start and settings
server
// receive the data from req.body
.use(express.urlencoded({ extended: true }))
// configure static files (css, scripts, images)
.use(express.static('public'))
// routes
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.listen(5500)
