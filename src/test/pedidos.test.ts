import request from 'supertest';
import app from '../app';
import sequelize from '../config/database';

describe('Pedidos API', () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Limpa e recria as tabelas antes dos testes
  });

  afterAll(async () => {
    await sequelize.close(); // Fecha a conexão com o banco após os testes
  });

  it('Deve criar um novo pedido', async () => {
    const res = await request(app)
      .post('/api/pedidos')
      .send({
        nomeCliente: 'João Silva',
        itens: [{ produto: 'Pizza', quantidade: 1 }],
        valorTotal: 50.0,
        status: 'pendente',
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('Deve listar todos os pedidos', async () => {
    const res = await request(app).get('/api/pedidos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
