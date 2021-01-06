const express = require('express')
const app = express.Router()

app.get('/', (req, res) => {
    res.send('Welcome to API to manage products data')
})

module.exports = app