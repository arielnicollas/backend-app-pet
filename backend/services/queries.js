require('dotenv').config()
const connect = require(`../controllers/connection`)
const getId = require(`../controllers/getUsersById`)
const postUser = require(`../controllers/postUsers`)
const updateUser = require(`../controllers/updateUsers`)
const deleteUser = require(`../controllers/deleteUsers`)

connect.pool

const getID = getId.getUserById

const reqPost= postUser.createUser

const reqUpdate = updateUser.updateUsers

const reqDelete = deleteUser.deleteUsers


// const deleteUser = (req, res) => {
//     const id = parseInt(req.params.id)

//     pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//         if(error){
//             throw error
//         }
//         res.status(200).send(`Usuário excluído: ${id}`)
//     })
// }

module.exports = {
    getID,
    reqPost,
    reqUpdate,
    reqDelete
}