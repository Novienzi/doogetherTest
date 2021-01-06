const express = require('express')
const SessionController = require('../controller/sessionController')
const authentication = require('../middleware/authenticationMiddleware')
const app = express.Router()

const errorHandler = require('../middleware/errorMiddleware')

app.post('/session', authentication, SessionController.addSession)
app.patch('/session', authentication, SessionController.editSession)
app.delete('/session', authentication, SessionController.deleteSession)
app.get('/session', SessionController.getListSession)
app.get('/session/detail', SessionController.getSessionDetail)

app.use(errorHandler)
module.exports = app