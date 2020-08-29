const express = require('express');
const newsApi = require('newsapi');

// const app=express()
const news = new newsApi(`843f0593bb8a4a6e8c45831cf6048c9e`);
const router = express.Router();
// basic routing
// app.use(express.static('public'))

router.get('/news', (_req, res) => {
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

router.get('/apple', (_req, res) => {
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