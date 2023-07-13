const connect = require('../controllers/connection');
const { validationResult, check } = require('express-validator');

connect.pool;

const createUser = (req, res) => {

  const { nome, email, telefone, cpf } = req.body;

  const emailValidation = check('email')
    .isEmail()
    .withMessage('E-mail inválido')
    .normalizeEmail();

  const cpfValidation = check('cpf')
    .isLength({ min: 11, max: 11 })
    .withMessage('CPF inválido');

  const telefoneValidation = check('telefone')
    .isLength({ min: 10, max: 12})
    .withMessage('Telefone inválido')
    

  Promise.all([emailValidation.run(req), cpfValidation.run(req), telefoneValidation.run(req)])
    .then(() => {
      const errors = validationResult(req); 

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Validação de todos os campos serem obrigatórios.
      if (!nome || !email || !telefone || !cpf) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }
  
      // Verificar se o CPF já está em uso.
      connect.pool.query('SELECT * FROM users WHERE cpf = $1',
        [cpf],
        (error, results) => {
          if (error) {
            throw error;
          }
          
          if (results.rows.length > 0) {
            return res.status(400).json({ error: 'CPF já está em uso' });
          }
          
          // Inserir o novo usuário no banco de dados.
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
    })
    .catch(err => {
      // Lidar com erros de validação.
      return res.status(500).json({ error: 'Erro de validação', message: err.message });
    });
};

module.exports = {
  createUser
};
