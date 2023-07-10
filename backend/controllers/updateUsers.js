const connect = require(`../controllers/connection`)

connect.pool

const updateUsers = (req,res) => {
    const id = parseInt(req.params.id)
    const {nome, email, telefone, cpf} = req.body

    connect.pool.query('UPDATE users SET nome = $1, email = $2, telefone = $3, cpf = $4 WHERE id = $5', [nome, email, telefone, cpf, id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Usuário atualizado com ID: ${id}`)
    })
}

module.exports = {
    updateUsers
}