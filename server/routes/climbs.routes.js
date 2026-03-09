const express = require("express");
const router = express.Router();

let climbs = [
  { id: 1, name: "Warmup slab", grade: "V1 / Green" },
  { id: 2, name: "Crimpy wall", grade: "V3 / Blue" },
];

let nextId = climbs.length + 1;

router.get("/", (req, res) => {
  res.status(200).json(climbs);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const climb = climbs.find((c) => c.id === id);

  if (!climb) {
    return res.status(404).json({ error: "Climb not found" });
  }

  res.status(200).json(climb);
});

router.post("/", (req, res) => {
  const { name, grade } = req.body;

  if (!name || !grade) {
    return res.status(400).json({ error: "name and grade are required" });
  }
  const newClimb = {
    id: nextId++,
    name,
    grade,
  };

  climbs.push(newClimb);
  res.status(201).json(newClimb);
});

module.exports = router;
