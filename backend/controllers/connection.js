require('dotenv').config()
const Pool = require('pg').Pool


const pool = new Pool({
  user:  process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

const getConnection = pool.on('connect',() => {
    console.log('Conexão estabelecida com sucesso')
});


module.exports = {
    pool,
    getConnection
}