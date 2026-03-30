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

async function getClimbById(id) {
  const result = await query(
    "SELECT id, name, grade, created_at FROM climbs WHERE id = $1",
    [id],
  );
  return result.rows[0];
}

async function updateClimb(id, name, grade) {
  const result = await query(
    "UPDATE climbs SET name = $2, grade = $3 WHERE id = $1 RETURNING id, name, grade, created_at",
    [id, name, grade],
  );
  return result.rows[0];
}

module.exports = { getAllClimbs, createClimb, getClimbById, updateClimb };
