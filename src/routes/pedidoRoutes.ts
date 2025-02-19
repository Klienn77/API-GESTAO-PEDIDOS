import { Router } from "express"; // Importa o módulo Router do Express, que é usado para definir rotas.
import pedidoController from '../controllers/pedidoController'; // Importa o controlador de pedidos que contém as funções para manipulação dos pedidos.

const router = Router(); // Cria uma nova instância do roteador do Express.

router.post('/pedidos', pedidoController.criarPedido); // Define uma rota POST para criar um novo pedido, chamando a função criarPedido do controlador de pedidos.
router.get('/pedidos', pedidoController.listarPedidos); // Define uma rota GET para listar todos os pedidos, chamando a função listarPedidos do controlador de pedidos.
router.get('/pedidos/:id', pedidoController.buscarPedido); // Define uma rota GET para buscar um pedido pelo ID, chamando a função buscarPedido do controlador de pedidos.
router.put('/pedidos/:id', pedidoController.atualizarPedido); // Define uma rota PUT para atualizar um pedido pelo ID, chamando a função atualizarPedido do controlador de pedidos.
router.delete('/pedidos/:id', pedidoController.excluirPedido); // Define uma rota DELETE para excluir um pedido pelo ID, chamando a função excluirPedido do controlador de pedidos.

export default router; // Exporta o roteador para ser usado em outras partes da aplicação.
