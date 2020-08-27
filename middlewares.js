const logger = (req, res, next) => {
    let d = new Date();
    let timestamp = d.toJSON().slice(0,19).replace('T',':');
    console.log(`${req.method} ${req.url} at ${timestamp}`);
    next();
}

const notFoundHandler = (req, res, next) => {
    res.status(404).send("URL not found");
    next()
}

const notFoundHandler505 = (err, req, res, next) => {
    res.status(505).send("URL not found 505");
}
module.exports = {logger, notFoundHandler,notFoundHandler505};