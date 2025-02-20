import app from './app';
import sequelize from './config/database';
import { Server } from 'http';

const PORT = process.env.PORT || 3001;

const server: Server = app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
});

export default server; // Agora o server está sendo exportado corretamente
