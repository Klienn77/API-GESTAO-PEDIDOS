# API-GESTAO-PEDIDOS

## Desafio Backend - API de Gestão de Pedidos 

  

Uma empresa de delivery precisa de uma API para gerenciar seus pedidos. Você deve criar um sistema utilizando Node.js, TypeScript e Express, integrando um banco de dados MySQL. 

  

### Requisitos da API: 

  

1-CRUD de Pedidos 

  

  * Criar um novo pedido 

  * Listar todos os pedidos 

  * Buscar um pedido pelo ID 

  * Atualizar o status de um pedido (pendente, em preparo, enviado, entregue) 

  * Excluir um pedido 

  

2-Modelo de Dados (Pedidos) 

  

  * ID (chave primária, autoincremento) 

  * Nome do Cliente 

  * Itens do Pedido (array de produtos) 

  * Valor Total 

  * Status do Pedido (enum: "pendente", "em preparo", "enviado", "entregue") 

  * Data de Criação 

  

3-Regras de Negócio 

  

  * Um pedido só pode ser atualizado para um status seguinte (exemplo: de "pendente" para "em preparo", mas não para "entregue" diretamente). 

  * Um pedido excluído não pode ser recuperado. 

  

4-Extras (Desafio Adicional) 

  

  * Criar autenticação para acessar a API (JWT) 

  * Implementar paginação na listagem de pedidos 