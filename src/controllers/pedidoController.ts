import { Request, Response } from "express";
import Pedido from "../models/Pedido"; //  modelo Pedido



class PedidoController { // Define a classe PedidoController, que irá conter os métodos para manipulação dos pedidos.
    async criarPedido(req: Request, res: Response) { // Método assíncrono para criar um novo pedido.
        try { // Inicia um bloco try-catch para tratar erros.
            const pedido = await Pedido.create(req.body); // Cria um novo pedido com base no corpo da requisição (req.body) e armazena na variável pedido.
            res.status(201).json(pedido); // Retorna a resposta com o status 201 (Criado) e o pedido recém-criado em formato JSON.
        } catch (error) { // Captura qualquer erro que ocorrer durante a execução do bloco try.
            res.status(400).json({ error: "Erro ao criar pedido" }); // Retorna a resposta com o status 400 (Requisição Inválida) e uma mensagem de erro em formato JSON.
        }
    }

    async listarPedidos(req: Request, res: Response) { // Método assíncrono para listar todos os pedidos.
        try { // Inicia um bloco try-catch para tratar erros.
            const pedidos = await Pedido.findAll(); // Busca todos os pedidos no banco de dados e armazena na variável pedidos.
            res.status(200).json(pedidos); // Retorna a resposta com o status 200 (OK) e a lista de pedidos em formato JSON.
        } catch (error) { // Captura qualquer erro que ocorrer durante a execução do bloco try.
            res.status(400).json({ error: "Erro ao listar pedidos" }); // Retorna a resposta com o status 400 (Requisição Inválida) e uma mensagem de erro em formato JSON.
        }
    }

    async buscarPedido(req: Request, res: Response) { // Método assíncrono para buscar um pedido pelo ID.
        try { // Inicia um bloco try-catch para tratar erros.
            const { id } = req.params; // Extrai o ID dos parâmetros da requisição.
            const pedido = await Pedido.findByPk(id); // Busca o pedido pelo ID no banco de dados e armazena na variável pedido.
            if (pedido) { // Verifica se o pedido foi encontrado.
                res.status(200).json(pedido); // Retorna a resposta com o status 200 (OK) e o pedido encontrado em formato JSON.
            } else { // Se o pedido não foi encontrado.
                res.status(404).json({ error: "Pedido não encontrado" }); // Retorna a resposta com o status 404 (Não Encontrado) e uma mensagem de erro em formato JSON.
            }
        } catch (error) { // Captura qualquer erro que ocorrer durante a execução do bloco try.
            res.status(400).json({ error: "Erro ao buscar pedido" }); // Retorna a resposta com o status 400 (Requisição Inválida) e uma mensagem de erro em formato JSON.
        }
    }

    async atualizarPedido(req: Request, res: Response) { // Método assíncrono para atualizar um pedido.
        try { // Inicia um bloco try-catch para tratar erros.
            const { id } = req.params; // Extrai o ID dos parâmetros da requisição.
            const [updated] = await Pedido.update(req.body, { // Atualiza o pedido com base no corpo da requisição e armazena o resultado na variável updated.
                where: { id } // Define a condição para a atualização (ID do pedido).
            });
            if (updated) { // Verifica se o pedido foi atualizado.
                const updatedPedido = await Pedido.findByPk(id); // Busca o pedido atualizado pelo ID e armazena na variável updatedPedido.
                res.status(200).json(updatedPedido); // Retorna a resposta com o status 200 (OK) e o pedido atualizado em formato JSON.
            } else { // Se o pedido não foi encontrado para atualização.
                res.status(404).json({ error: "Pedido não encontrado" }); // Retorna a resposta com o status 404 (Não Encontrado) e uma mensagem de erro em formato JSON.
            }
        } catch (error) { // Captura qualquer erro que ocorrer durante a execução do bloco try.
            res.status(400).json({ error: "Erro ao atualizar pedido" }); // Retorna a resposta com o status 400 (Requisição Inválida) e uma mensagem de erro em formato JSON.
        }
    }

    async excluirPedido(req: Request, res: Response) { // Método assíncrono para excluir um pedido.
        try { // Inicia um bloco try-catch para tratar erros.
            const { id } = req.params; // Extrai o ID dos parâmetros da requisição.
            const deleted = await Pedido.destroy({ // Exclui o pedido com base no ID.
                where: { id } // Define a condição para a exclusão (ID do pedido).
            });
            if (deleted) { // Verifica se o pedido foi excluído.
                res.status(204).send(); // Retorna a resposta com o status 204 (Sem Conteúdo) indicando que o pedido foi excluído.
            } else { // Se o pedido não foi encontrado para exclusão.
                res.status(404).json({ error: "Pedido não encontrado" }); // Retorna a resposta com o status 404 (Não Encontrado) e uma mensagem de erro em formato JSON.
            }
        } catch (error) { // Captura qualquer erro que ocorrer durante a execução do bloco try.
            res.status(400).json({ error: "Erro ao excluir pedido" }); // Retorna a resposta com o status 400 (Requisição Inválida) e uma mensagem de erro em formato JSON.
        }
    }
}

export default new PedidoController(); // Exporta uma nova instância da classe PedidoController para ser utilizada em outras partes da aplicação.
