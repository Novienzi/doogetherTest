function errorMiddleware(err, req, res, next) {
    let errCode
    let errStatus
    let errMessage

    switch (err.name) {
        case 'SequelizeValidationError':
            errCode = 400;
            errStatus = err.name;
            errMessage = err.message
            break;

        case 'SequelizeDatabaseError':
            errCode = 400;
            errStatus = err.name;
            errMessage = err.message
            break;

        case 'SequelizeUniqueConstraintError':
            errCode = 400;
            errStatus = err.name;
            errMessage = err.errors[0].message
            break;

        case 'SequelizeForeignKeyConstraintError':
            errCode = 400;
            errStatus = err.name;
            errMessage = err.message
            break;

        case 'Error':
            errCode = 500;
            errStatus = err.name;
            errMessage = err.message
            break;

        case 'ReferenceError':
            errCode = 500;
            errStatus = err.name;
            errMessage = err.message
            break;

        case 'TypeError':
            errCode = 500;
            errStatus = err.name;
            errMessage = err.message
            break;

        default:
            errCode = 500;
            errStatus = err.name;
            errMessage = 'Internal Server Error'
            break;
    }

    res.status(errCode).json({
        status: errStatus,
        message: errMessage
    })

};

module.exports = errorMiddleware