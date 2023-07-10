const Pool = require('pg').Pool

const dbConnection = () => {
       new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  });
}

const getConnection = dbConnection.on('connect',() => {
    console.log('Conexão estabelecida com sucesso')
});


module.exports = {
    dbConnection,
    getConnection
}