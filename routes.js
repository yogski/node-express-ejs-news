const express = require('express');
const newsApi = require('newsapi');

const news = new newsApi('662686f399bd415aa024deea2dff86a4');
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

module.exports = router;