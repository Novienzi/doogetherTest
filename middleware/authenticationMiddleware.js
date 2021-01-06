const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

function authentication(req, res, next) {
    const authorization = req.headers.authorization
    if (authorization) {
        const token = authorization.split(' ')[1]
        try {
            const tokenPayLoad = jwt.verify(token, secret)
            req.user = tokenPayLoad
            next()
        } catch (error) {
            res.status(401).send('Token is expired')
        }
    } else {
        res.status(401).send('Unauthorized')
    }

}

module.exports = authentication