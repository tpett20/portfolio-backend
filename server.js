// Dependencies
const express = require('express')
const cors = require('cors')

// JSON Files
const projects = require('./projects.json')
const about = require('./about.json')

// Configuration
const app = express()

// Middleware
app.use(cors())

// Routes
app.get('/', (req, res) => res.send('Hello!'))
app.get('/projects', (req, res) => res.json(projects))
app.get('/about', (req, res) => res.json(about))

// Port Declaration
const PORT = process.env.PORT || 4000

// Server Listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))