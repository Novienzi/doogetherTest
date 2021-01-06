const express = require('express');
const UserController = require('../controller/userController');
const errorMiddleware = require('../middleware/errorMiddleware');
const app = express.Router()

app.post('/register', UserController.register);
app.post('/login', UserController.login);

app.use(errorMiddleware)
module.exports = app