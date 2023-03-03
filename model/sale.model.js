import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Product from "./product.model.js";
import Client from "./client.model.js";


const Sale = db.define("sales", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  value: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
}, {underscored: true});

Sale.belongsTo(Product, {foreignKey: "product_id"});
Sale.belongsTo(Client, {foreignKey: "client_id"});

export default Sale;
