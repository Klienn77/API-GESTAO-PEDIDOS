import { InitOptions } from 'sequelize';
import sequelize from '../config/database';

const pedidoOption : InitOptions = {
    sequelize,
    tableName:'pedidos',
    timestamps: false,
};

export default pedidoOption;