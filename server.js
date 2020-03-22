const express = require('express')
const mongoose = require('mongoose')
const app = express()
const articleRouter = require('./routes/articles.js')
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://localhost/blog')
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.use('/articles', articleRouter)
app.get('/', (req, res) => {
  const articles = [{
    title: 'mooo i say',
    createdAt: new Date(),
    description: ' some cow says mooooooo'
  }]
  res.render('articles/index', { articles: articles })
})
app.listen('5000')