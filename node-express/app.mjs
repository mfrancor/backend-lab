import express from 'express';
import { Pool } from 'pg';
import { randomUUID } from 'node:crypto';

const app = express();
const port = 3000;

app.use(express.json());

const pool = new Pool({
  user: 'backendlabuser',
  host: 'localhost',
  database: 'backendlab',
  password: 'backendlabpass',
  port: 5433,
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/produtos', async (req, res) => {
  const result = await pool.query('SELECT * FROM produto');
  res.json(result.rows);
});

app.post('/produto', async (req, res) => {
  const { nome, preco, quantidade, detalhe } = req.body;
  const id = randomUUID();

  const result = await pool.query(
    'INSERT INTO produto (id, nome, preco, quantidade, detalhe) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [id, nome, preco, quantidade, detalhe],
  );
  res.json(result.rows[0]);
});

app.put('/produto/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, preco, quantidade, detalhe } = req.body;
  const result = await pool.query(
    'UPDATE produto SET nome = $1, preco = $2, quantidade = $3, detalhe = $4 WHERE id = $5 RETURNING *',
    [nome, preco, quantidade, detalhe, id],
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ message: `Produto ${id} nao encontrado.` });
  }

  res.json(result.rows[0]);
});

app.delete('/produto/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM produto WHERE id = $1', [id]);
  res.send(`Produto ${id} deletado com sucesso!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
