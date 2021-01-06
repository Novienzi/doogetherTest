require('dotenv').config()
const express = require('express')
const readdirp = require('readdirp')

const app = express()
app.use(express.json())

readdirp('.', { fileFilter: "*Route.js" })
    .on('data', (entry) => {
        const path = `./${entry.path}`
        const route = require(path)
        app.use(route)
        console.log(`${path} is loaded`);
    })


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on ${process.env.HOSTNAME}`);
})