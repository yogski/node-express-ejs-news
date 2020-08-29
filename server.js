const express = require('express');
const router = require('./routes');
const path = require('path');
const middleware = require('./middlewares');

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.use(router);
app.use(middleware.notFoundHandler);
app.use(middleware.logger)
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || 'Internal Server Error',
        },
    });
})

// Body parser, reading data from body into req.body
app.use(express.json());

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});