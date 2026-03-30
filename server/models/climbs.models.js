const { query } = require("../db");

async function getAllClimbs() {
  const result = await query(
    "SELECT id, name, grade, created_at FROM climbs ORDER BY id DESC",
  );
  return result.rows;
}

module.exports = { getAllClimbs };
