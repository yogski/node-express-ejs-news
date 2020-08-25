const express = require('express');
// dipakai untuk memungkinkan sharing resource dengan API
const cors = require('cors');
const router = require('./routes');
const {logger, notFoundHandler} = require('./middlewares');

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.set('view engine', 'ejs');
app.use(logger);
app.use(router);

// Handle 404 URLs
app.use(notFoundHandler);

// Body parser, reading data from body into req.body
app.use(express.json());

app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});