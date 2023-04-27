const express = require('express')

// Express app
const app = express()

// Listening to requests
app.listen(3000);

//Home page
app.get('/', (req, res) => {
    res.sendFile('./pages/home.html', { root: __dirname })
})

// About page
app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', { root: __dirname })
})

// Redirects
app.get('/about-us', (req, res) => {
    res.redirect('./about')
})

// 404 Pages --- This app.use also acts as a middleware
app.use((req, res) => {
    res.sendFile('./pages/404.html', { root: __dirname })
})