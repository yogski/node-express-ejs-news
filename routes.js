const express = require('express');
const newsApi = require('newsapi');
const check = require('./middlewares.js')
const app = express()
const news = new newsApi('04d34934928e42f8beff8e186d048899');
const router = express.Router();
app.use(check.logger)

// basic routing
router.get('/news',check.logger, (req, res) => {
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
            res.send("error")
        }
    });
})
router.get('/covid',check.logger, (req, res) => {
    news.v2.everything({
        q: 'covid',
        language: 'id',
      }).then(response => {
          let articles = response.articles;
        res.render('news', {
            articles
        })
      });
})

router.get('/error',(req,res)=>{
    iniError
})

module.exports = router;