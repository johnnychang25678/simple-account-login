const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => console.log(`Listening to server on port: ${port}`))