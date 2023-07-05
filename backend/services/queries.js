const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db',
  password: 'qwe543210',
  port: 5432,
})

const getUsers = (req,res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
  })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}


const createUser = (req,res) => {
    const {name,email,telefone,document} = req.body

    // if(name == name.lenght(11)){
    //     return 
    // }
    pool.query('INSERT INTO users (name,email,telefone,document) VALUES ($1, $2) RETURNING *', [name,email,telefone,document], (error, results) => {
        if(error) {
            throw error
        }
        res.status(201).send(`Usuário adicionado com ID: ${results.rows[0].id}`)
    })
}


const updateUser = (req,res) => {
    const id = parseInt(req.params.id)
    const {name, email, telefone, document} = req.body

    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name,email,telefone,document], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).send(`Usuário atualizado com ID: ${id}`)
    })
}


const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).send(`Usuário excluído: ${id}`)
    })
}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}