CREATE TABLE produto (
    id uuid PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    quantidade INTEGER NOT NULL,
    detalhe VARCHAR(100) NULL
);