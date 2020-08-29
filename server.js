const express = require('express');
const router = require('./routes');
const path = require('path');
const {logger, internalServerError, notFoundHandler} = require('./middlewares');

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(logger);
app.use('*/css', express.static(path.join(__dirname, 'public/css')))
app.use(router);
// app.use(express.static('public'));

app.get('/theError', (req, res)=> {
    theError // ini yang menjadi penyebab error
})

// handle untuk error 500 
app.use(internalServerError);


// handle untuk error 404
app.use(notFoundHandler);
// app.use(function(err, req, res, next) {
//     console.error(err)
//     res.status(500).json({
//         status: 'fail',
//         errors: err.message
//     })
// })

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});