const express = require('express');
const router = require('./routes');
const path = require('path');
const {
    logger,
    notFoundHandler,
    internalServerError
} = require('./middlewares.js');

// inisialisasi app
const app = express();

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(router);
app.use(logger);
// Implementasi CSS styling
app.use('*/css', express.static(path.join(__dirname, 'public/css')))
// Implementasi Internal Server Error
app.use(internalServerError);
// Implenatasi not FOund Handler
app.use(notFoundHandler);

app.get('/iniError', (req, res) => {
    iniError
})



// Body parser, reading data from body into req.body
app.use(express.json());

app.use(express.urlencoded({
    extended: false
}))

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});