const express = require("express");
const router = require("./routes");
const { logger, notFoundHandler } = require("./middlewares");

// inisialisasi app
const app = express();

app.use(express.static('./'));

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(router);
app.use(logger);
app.use(notFoundHandler);

// Body parser, reading data from body into req.body
app.use(express.json());

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
