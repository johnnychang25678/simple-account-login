const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')

const app = express()
const port = 3000

// template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(session({ secret: 'mySecret', name: 'user', resave: false, saveUninitialized: false, cookie: { maxAge: 60000 } }))
// a session will be stored in req.session for every request

// routes
app.get('/', (req, res) => {
  if (req.session.user) {
    return res.redirect('/welcome')
  }
  res.render('index')
})

function auth(req, res, next) {
  if (req.session.user) {
    console.log('authenticated')
    next()
  } else {
    console.log('not authenticated')
    return res.redirect('/')
  }

}

app.get('/welcome', auth, (req, res) => {
  const userName = req.session.user
  return res.render('welcome', { message: `Welcome back, ${userName}!` })
})


app.post('/login', (req, res) => {
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
  const { email, password } = req.body
  console.log(email, password)
  if (email.trim() === '' || password.trim() === '') {
    return res.render('index', { alert: 'Password or email is incorrect, please try again!' })
  }

  for (let user of users) {
    if (user.email === email && user.password === password) {
      req.session.user = user.firstName
      return res.redirect('/welcome')
    }
  }

  return res.render('index', { alert: 'Password or email is incorrect, please try again!' })

})

app.get('/logout', auth, (req, res) => {
  req.session.destroy(() => {
    console.log('session destroyed')
  })
  res.render('index', { alert: 'You are logged out! Re-enter email and password to log in again!' })
})

app.listen(port, () => console.log(`Listening to server on port: ${port}`))

