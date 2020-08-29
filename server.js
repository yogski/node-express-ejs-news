const express = require('express')
const newsapi = require('newsapi')
const app = express()
const PORT = 8080
require('dotenv').config()
const API_KEY = process.env.API_KEY

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

const news = new newsapi(API_KEY)

app.get('/today', (req, res) => {
  news.v2
    .topHeadlines({
      q: req.query.q,
      country: 'us',
    })
    .then((result) => {
      if (result.status === 'ok') {
        let articles = result.articles
        res.render('news', { articles })
      } else {
        res.send('No news found.')
      }
    })
})

app.get('/javascript', (req, res) => {
  news.v2.everything({ q: 'javascript' }).then((result) => {
    if (result.status === 'ok') {
      let articles = result.articles
      res.render('news', { articles })
    } else {
      res.send('No news found.')
    }
  })
})

app.listen(PORT, () => {
  console.log(`App listen on ${PORT}`)
})
