import { Model } from "sequelize";
import pedidoAttributes from "./pedidoAttributes";
import pedidoOption from "./pedidoOption";

class pedido extends Model{}
pedido.init(pedidoAttributes, pedidoOption);

export default pedido;