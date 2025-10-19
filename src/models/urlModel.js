import pool from "../config/db.js";

export async function saveUrl(shortCode, originalUrl) {
  try {
    const result = await pool.query(
      "INSERT INTO urls (short_code, original_url) VALUES ($1, $2) RETURNING *",
      [shortCode, originalUrl]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error in saveUrl:", error);
    throw error;
  }
}

export async function findUrl(shortCode) {
  try {
    const result = await pool.query(
      "SELECT original_url FROM urls WHERE short_code = $1",
      [shortCode]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error in findUrl:", error);
    throw error;
  }
}
