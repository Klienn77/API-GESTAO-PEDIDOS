import request from 'supertest'; // Importa o módulo supertest, que é usado para testar APIs HTTP.
import app from '../app'; // Importa a aplicação Express que será testada.

describe('Pedidos API', () => { // Define uma suíte de testes para a API de Pedidos.
  it('Deve criar um novo pedido', async () => { // Define um teste que verifica se um novo pedido pode ser criado.
    const res = await request(app) // Inicia uma requisição utilizando a aplicação Express importada.
      .post('/pedido') // Define o método HTTP e a rota para a requisição (POST /pedido).
      .send({ // Envia um payload (corpo da requisição) para o endpoint.
        nomeCliente: 'João Silva', // Nome do cliente no pedido.
        itens: [{ produto: 'Pizza', quantidade: 1 }], // Itens no pedido, com produto e quantidade.
        valorTotal: 50.0, // Valor total do pedido.
        status: 'pendente', // Status do pedido.
      });

    expect(res.status).toBe(201); // Verifica se o status da resposta é 201 (Criado).
    expect(res.body).toHaveProperty('id'); // Verifica se o corpo da resposta contém uma propriedade 'id'.
  });

  it('Deve listar todos os pedidos', async () => { // Define um teste que verifica se todos os pedidos podem ser listados.
    const res = await request(app).get('/pedidos'); // Faz uma requisição GET para a rota /pedidos.
    expect(res.status).toBe(200); // Verifica se o status da resposta é 200 (OK).
    expect(res.body).toBeInstanceOf(Array); // Verifica se o corpo da resposta é uma instância de Array.
  });
});
