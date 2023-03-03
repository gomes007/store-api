import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Supplier from "./supplier.model.js";

const Product = db.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  value: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {underscored: true});

Product.belongsTo(Supplier, {foreignKey: "supplier_id"});

export default Product;
