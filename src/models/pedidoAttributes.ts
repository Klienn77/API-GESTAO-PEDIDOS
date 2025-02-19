import {  DataTypes } from "sequelize";




const pedidoAttributes = {
        
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nomeCliente:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        itens: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        valorTotal:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status:{
            type: DataTypes.ENUM('pendente', 'em preparo', 'enviado', 'entregue'),
            defaultValue: 'pendente',
        },
        dataCriacao:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    };




export default pedidoAttributes;