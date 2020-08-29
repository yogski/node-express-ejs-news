const express = require('express');
const router = require('./routes');

// const logger = require('./middlewares');
const {notFoundHandler, logger, intServerError}= require('./middlewares');

const path = require('path');

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');

app.use(logger);
app.use('*/css', express.static(path.join(__dirname, 'public/css')))

app.use(router);
app.use(intServerError);
app.use(notFoundHandler);

// app.get(notFoundHandler);

// Body parser, reading data from body into req.body
app.use(express.json());

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});