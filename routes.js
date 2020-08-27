const express = require("express");
const newsApi = require("newsapi");
const news = new newsApi("ce3eaeea87d142e998dae08d564356c1");
const router = express.Router();

// basic routing
router.get("/news", (req, res) => {
  news.v2
    .topHeadlines({
      q: req.query.q,
      country: "id",
    })
    .then((result) => {
      if (result.status === "ok") {
        let articles = result.articles;
        res.render("news", {
          articles,
        });
      } else {
        res.send("Cannot fetch news.");
      }
    });
});
// additional routing
router.get("/jpnews", (req, res) => {
    news.v2
      .topHeadlines({
        q: req.query.q,
        country: "jp",
      })
      .then((result) => {
        if (result.status === "ok") {
          let articles = result.articles;
          res.render("news", {
            articles,
          });
        } else {
          res.send("Cannot fetch news.");
        }
      });
  });

// Error 500 handler
router.get("/error", (req, res) => {
  res.status(500).json({ message: "SERIOUS SERVER PROBLEM!" });
});

module.exports = router;
