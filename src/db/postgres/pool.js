const { Pool } = require("pg");

const postgresConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 5432,
};

async function connectPostgres() {
  try {
    const pool = new Pool(postgresConfig);

    // Verify Pool
    await pool.query("select 1");
    console.log("Postgres connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = { connectPostgres };
