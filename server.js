const express = require('express');
const router = require('./routes');

const check = require('./middlewares')

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(router)
app.use(check.notFoundHandler)
app.use(check.notFoundHandler505)
// Body parser, reading data from body into req.body
app.use(express.json());

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});