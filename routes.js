const express = require('express');
const newsApi = require('newsapi');

const news = new newsApi('de64a8e5e4814221a640c348751e1f00');
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

// tambahan route baru
router.get('/today', (req, res) => {
    news.v2.everything({
        q: req.query.q,
        from: new Date().toISOString().split('T')[0]
        //today in year-month-day
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