import { Sequelize } from "sequelize";
import path from "path";
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const db_name: string = process.env.DB_NAME as string;
const db_username: string = process.env.DB_USERNAME as string;
const db_password: string = process.env.DB_PASSWORD as string;

const sequelize = new Sequelize(db_name, db_username, db_password, {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com o banco");
  })
  .catch((error) => {
    console.error("Não foi possível estabelecer uma conexão", error);
  });

// sequelize.sync({});

export default {
  Sequelize,
  sequelize,
};
