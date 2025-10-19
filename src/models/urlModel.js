import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

// Test koneksi
pool
  .connect()
  .then(() => console.log("✅ PostgreSQL Connected Successfully!"))
  .catch((err) => console.error("❌ PostgreSQL Connection Failed:", err));

export const saveUrl = async (shortCode, originalUrl) => {
  const result = await pool.query(
    "INSERT INTO urls (short_code, original_url) VALUES ($1, $2) RETURNING *",
    [shortCode, originalUrl]
  );
  return result.rows[0];
};

export const findUrl = async (shortCode) => {
  const result = await pool.query(
    "SELECT original_url FROM urls WHERE short_code = $1",
    [shortCode]
  );
  return result.rows[0];
};
