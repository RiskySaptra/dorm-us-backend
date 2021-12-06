const { Pool } = require("pg");
const pool = new Pool({
  user: "risky",
  host: "localhost",
  database: "experiment",
  password: "30second",
  port: 5432,
});

module.exports = {
  query: (text: string, params: any) => pool.query(text, params),
};
