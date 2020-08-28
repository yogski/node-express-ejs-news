const express = require('express');
const newsApi = require('newsapi');

// const app=express()
const news = new newsApi(`f32e8f88c36e4cabb88295d27dbe2416`);
const router = express.Router();
// basic routing
// app.use(express.static('public'))

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

router.get('/apple', (req, res) => {
    news.v2.everything({
        q: 'apple',
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