const express = require('express');
const router = require('./routes');
const path = require('path'); //buat kuis css
const {logger, internalServerError, notFoundHandler} = require('./middlewares'); // Kuis 1

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');

app.use(logger); // Kuis satu

app.use('*/css', express.static(path.join(__dirname,'public/css'))) // Buat kuis css

app.use(router);

app.get('/iniErr', (req, res)=> {
    iniError // referensi dari rekan
})

// handle error 500 
app.use(internalServerError); // Kuis satu

// handle 404 
app.use(notFoundHandler); // Kuis satu

// Body parser, reading data from body into req.body
(express.json());
app.use(express.urlencoded({ extended: false}))

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});