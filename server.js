const express = require('express');
const router = require('./routes');

// inisialisasi app
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');
app.use(router);

// Body parser, reading data from body into req.body
app.use(express.json());

app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});