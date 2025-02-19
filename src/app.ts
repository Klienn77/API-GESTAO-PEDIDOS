import express from 'express';
import pedidoRoutes from './routes/pedidoRoutes';
import dotenv from 'dotenv';
import sequelize from './config/database';

dotenv.config();

const app = express();

export default app;

app.use(express.json());

app.use('/api', pedidoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
});


console.log ('DB_USER', process.env.DB_USER);
console.log ('DB_PASS', process.env.DB_PASS);
console.log ('DB_NAME', process.env.DB_NAME);
console.log ('DB_HOST', process.env.DB_HOST);