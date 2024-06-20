//Archivo de conexión, gestiona la conexión con la base de datos MySQL mediante Sequelize
import { Sequelize } from "sequelize";
//Importamos valores seteados en el .env y el config.js
import {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DIALECT,
  DB_PORT,
} from "../config/config.js";

//Creamos la conexión
const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host:  DB_HOST,
  dialect: DB_DIALECT,
  port: DB_PORT
});

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default connection;