const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'petshop',
  password: 'qwe543210',
  port: 5432
});

const getConnection = pool.on('connect',() => {
    console.log('Conexão estabelecida com sucesso')
});


module.exports = {
    pool,
    getConnection
}