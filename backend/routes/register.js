const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
// const db = require(`../services/queries`)
const getId = require(`../controllers/getUsersById`)
const reqPost = require(`../controllers/postUsers`)
const reqUpdate = require(`../controllers/updateUsers`)
const reqDelete = require(`../controllers/deleteUsers`)
// const { query } = require('express-validator'); 

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.get('/users', db.getUsers)
app.get('/users/:id', getId.getUserById) 
app.post('/users', reqPost.createUser)
app.put('/users/:id', reqUpdate.updateUsers)
app.delete('/users/:id', reqDelete.deleteUsers) 

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })






























