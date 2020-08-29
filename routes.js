const express = require('express');
const newsApi = require('newsapi');

const news = new newsApi(`279a62a713d54808a43b94fdd952562a`);
const router = express.Router();
// basic routing

router.get('/news', (req, res) => {
    news.v2.topHeadlines({
        q: req.query.q, //minta body dari Api, format json
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

// Kuis no 4
router.get('/bitcoin', (req, res) => {
    news.v2.everything({
        q: 'bitcoin', //minta body dari Api, format json
        // country: 'id'
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