const express = require('express');
const newsApi = require('newsapi');
const news = new newsApi('e5d42c5279ba46ca989de53e27f27972');
const router = express.Router();
// basic routing
router.get('/news', (req, res) => {
    news.v2.topHeadlines({
        q: req.query.q,
        country: 'id'
    }).then(result => {
        if (result.status === "ok") {
            let articles = result.articles;
            res.render('news', {
                articles
            })
        } else {
            res.send('Cannot fetch news.')
        }
    });
})

// additional routing
router.get('/trump', (req, res) => {
    news.v2.topHeadlines({
        q: 'trump',
    }).then(result => {
        if (result.status === "ok") {
            let articles = result.articles;
            res.render('news', {
                articles
            })
        } else {
            res.send('Cannot fetch news.')
        }
    });
})

module.exports = router;