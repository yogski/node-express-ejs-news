const express = require('express');
const newsApi = require('newsapi');

const news = new newsApi('656c0b1056d84d6ca448684dee0120fd');
const router = express.Router();
// basic routing
router.get('/news', (req, res) => {
    news.v2.topHeadlines({
        q: req.query.q,
        country: 'id'
    }).then(result => {
        if(result.status === "ok") {
            let articles = result.articles;
            res.render('news', {
                articles
            })
        } else {
            res.send('Cannot fetch news.')
        }
    });
})

router.get('/sports', (req, res) => {
    news.v2.everything({
        q: req.query.q,
        q:'sports',
    }).then(result => {
        if(result.status === "ok") {
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