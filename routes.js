const express = require('express');
const newsApi = require('newsapi');
const path = require('path');

const news = new newsApi('10ce490c22cf4af88f1075a6da571a1a');
const router = express.Router();

// basic routing
router.get('/', (req, res) => {
    res.send('Hello world!')
})

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

router.get('/sport', (req, res) => {
    news.v2.topHeadlines({
        category: 'sports'
    }).then(result => {
        if (result.status === "ok") {
            let articles = result.articles;
            res.render('news', {
                articles
            })
        } else {
            res.send('Cannot fetch news.')
        }
    })
})


router.get('/*', (req, res) => {
    res.status(404).send("URL not found");
})

module.exports = router;