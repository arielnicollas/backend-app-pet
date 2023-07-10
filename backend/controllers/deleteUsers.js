const connect = require(`../controllers/connection`)

connect.pool

const deleteUsers = (req, res) => {
    const id = parseInt(req.params.id)

    connect.pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if(error){
            throw error
        }
        res.status(200).send(`Usuário excluído: ${id}`)
    })
}

module.exports = {
    deleteUsers
}