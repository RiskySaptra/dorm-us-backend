const { Pool } = require("pg");

const connect = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const pool = new Pool(connect);
module.exports = {
  query: (text: string, params: any) => pool.query(text, params),
};
