INSERT INTO users (nome, email, telefone, cpf) VALUES ('regnier', 'regnier@outlook.com', '3432390533', '12345678901');
INSERT INTO users (nome, email, telefone, cpf) VALUES ('Dener', 'dener@outlook.com', '344568990', '12348248347');

CREATE USER backend WITH PASSWORD 'B4cK';
GRANT ALL PRIVILEGES ON DATABASE petshop TO backend;



