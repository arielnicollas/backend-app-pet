const connect = require('../controllers/connection');
const { validationResult } = require('express-validator');

connect.pool;

const createUser = (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const { nome, email, telefone, cpf } = req.body;
  

  // Validação de todos os campos serem obrigatorios
  if (!nome || !email || !telefone || !cpf) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  
  // Verificar se o CPF já está em uso
  connect.pool.query('SELECT * FROM users WHERE cpf = $1',
    [cpf],
    (error, results) => {
      if (error) {
        throw error;
      }
      
      if (results.rows.length > 0) {
        return res.status(400).json({ error: 'CPF já está em uso' });
      }
      
      // Inserir o novo usuário no banco de dados
      connect.pool.query(
        'INSERT INTO users (nome, email, telefone, cpf) VALUES ($1, $2, $3, $4) RETURNING *',
        [nome, email, telefone, cpf],
        (error, results) => {
          if (error) {
            throw error;
          }
          res.status(201).send(`Usuário adicionado com ID: ${results.rows[0].id}`);
        }
      );
    }
  );
};

module.exports = {
  createUser
};

  // Criar validação para resposta de erro para CPF Duplicado