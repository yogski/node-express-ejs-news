const path = require ('path');
const express = require('express');
const router = require('./routes');
const {logger, notFoundHandler, internalServerError} = require('./middlewares');

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(router);

//implementasi css
app.use('*/css', express.static(path.join(__dirname, '/public/css')))

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//implementasi middleware 404 & logger
app.use(logger);
app.use(notFoundHandler);

//test error
app.get('/iniError', (req, res) => {
    iniError
    //ini penyebab error
})

app.use(internalServerError);

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});