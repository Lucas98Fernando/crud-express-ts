import { DataTypes } from "sequelize";
import db from "../../database/connection";

const Product = db.sequelize.define("products", {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  description: {
    type: DataTypes.STRING,
  },
});

// Product.sync({
//   force: true,
// });

export default Product;
