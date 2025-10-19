const pool = require("../config/db");

async function saveUrl(shortCode, originalUrl) {
  const result = await pool.query(
    "INSERT INTO urls (short_code, original_url) VALUES ($1, $2) RETURNING *",
    [shortCode, originalUrl]
  );
  return result.rows[0];
}

async function findUrl(shortCode) {
  const result = await pool.query(
    "SELECT original_url FROM urls WHERE short_code = $1",
    [shortCode]
  );
  return result.rows[0];
}

module.exports = { saveUrl, findUrl };
