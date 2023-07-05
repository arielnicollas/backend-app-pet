\c petshop;

INSERT INTO users (nome, email, telefone, cpf) VALUES ('regnier', 'regnier@outlook.com', '3432390533', '12345678901');
INSERT INTO users (nome, email, telefone, cpf) VALUES ('Dener', 'dener@outlook.com', '344568990', '12348248347');
INSERT INTO users (nome, email, telefone, cpf) VALUES ('Felipe', 'felipe@outlook.com', '3432480533', '12311678907');
INSERT INTO users (nome, email, telefone, cpf) VALUES ('yago', 'yago@outlook.com', '344565690', '12344444847');
INSERT INTO users (nome, email, telefone, cpf) VALUES ('ariel', 'ariel@outlook.com', '3432390773', '12348978900');


CREATE USER backend WITH PASSWORD 'B4cK';
GRANT ALL PRIVILEGES ON DATABASE petshop TO backend;



