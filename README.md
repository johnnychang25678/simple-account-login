### Simple Account Login
Simple user authentication using
- `node.js`
- `express` 
- `express-session`
- `handlebars`

## Features
- User is able to login with email and password
- If password or email is incorrect, an alert box will show on login page
- Once logged in, user will be redirected to a welcome page. User is not able to access index page when logged in.
- User is able to log out with logout button on welcome page.
- You can try with these emails and passwords:
```
users = [
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
```

## Quick Start
1. Install server dependencies
```
npm install
```
2. Run server with nodemon
```
npm run dev
```
3. Open up the browser
```
http://localhost:3000
```

