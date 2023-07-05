const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require(`../services/queries`)

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })


























// app.get('/', (req, res) => {
//     res.json(
//        {
//             name: 'Ariel',
//             telephone: '34998550207',
//             email: 'frplly@gmail.com',
//             document: '111.230.906-37'
//         }
//     ) 
// })

// app.post('/register', (req, res) => {
//     res.json(
//        {
//             name: 'Ariel',
//             telephone: '34998550207',
//             email: 'frplly@gmail.com',
//             document: '111.230.906-37'
//         }
//     ) 
//     })


// app.put('/register', (req, res) => {
//     res.json(
//        {
//             name: 'Ariel',
//             telephone: '34998550207',
//             email: 'frplly@gmail.com',
//             document: '111.230.906-37'
//         }
//     ) 
// })


// app.delete('/register', (req, res) => {
//     res.json(
//        {
//             name: 'Ariel',
//             telephone: '34998550207',
//             email: 'frplly@gmail.com',
//             document: '111.230.906-37'
//         }
//     ) 
// })



