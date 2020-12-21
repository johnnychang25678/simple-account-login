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

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]
  const message = authentication(users, email, password)
  res.render('welcome', { message: message })
})

app.listen(port, () => console.log(`Listening to server on port: ${port}`))

function authentication(users, email, password) {
  for (const user of users) {
    if (user.email === email && user.password === password) {
      return `Welcome back, ${user.firstName}!`
    }
  }
  return 'Email or password is incorrect!'
}