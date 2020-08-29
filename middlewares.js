  
const logger = (req, res, next) => {
    let d = new Date();
    let timestamp = d.toJSON().slice(0,19).replace('T',':');
    console.log(`${req.method} ${req.url} at ${timestamp}`);
    next();
}

const notFoundHandler = (req, res, next) => {
    res.status(404).send("URL not found");
    next();
}

const intServerError = (err, req, res, next) => {
    console.error(err)
    res.status(500).json({
        status: 'internal error',
        errors: err.message
    })
    next();
}

module.exports = {logger, notFoundHandler, intServerError};