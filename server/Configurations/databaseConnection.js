import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: "root",
    password: "Iram@1304115",
    database: "authenticationModule",
  })
  .promise();
console.log("DB connected");
export default pool;
