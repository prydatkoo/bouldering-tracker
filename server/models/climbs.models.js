const { query } = require("../db");

async function getAllClimbs() {
  const result = await query(
    "SELECT id, name, grade, created_at FROM climbs ORDER BY id DESC",
  );
  return result.rows;
}

async function createClimb(name, grade) {
  const result = await query(
    "INSERT INTO climbs (name, grade) VALUES ($1, $2) RETURNING id, name, grade, created_at",
    [name, grade],
  );
  return result.rows[0];
}

module.exports = { getAllClimbs };
