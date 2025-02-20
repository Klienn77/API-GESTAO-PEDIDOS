import request from 'supertest';
import server from '../server'; // Agora estamos importando corretamente
import sequelize from '../config/database';

describe('Servidor', () => {
  afterAll(async () => {
    if (server && typeof server.close === 'function') {
      server.close(); // Fecha o servidor após os testes
    }
    await sequelize.close(); // Fecha a conexão com o banco de dados
  });

  it('Deve estar rodando e responder na rota principal', async () => {
    const res = await request(server).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
