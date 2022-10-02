const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("Home page")
})

app.get('/about', (req, res) => {
    res.send("About page")
})

app.listen(port, (req, res) => console.log(`server started on ${port}`))