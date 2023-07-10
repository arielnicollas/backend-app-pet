const connect = require(`../controllers/connection`)

connect.pool

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    connect.pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getUserById
}