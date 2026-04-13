const express = require("express");
const router = express.Router();

const {
  getAllClimbs,
  createClimb,
  getClimbById,
  updateClimb,
  deleteClimb,
} = require("../models/climbs.models");

router.get("/api/climbs", async (req, res, next) => {
  try {
    const climbs = await getAllClimbs();
    res.status(200).json(climbs);
  } catch (err) {
    next(err);
  }
});

router.get("/api/climbs/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ error: "Invalid climb id" });
    }
    const climb = await getClimbById(id);
    if (!climb) {
      return res.status(404).json({ error: "Climb not found" });
    }
    res.status(200).json(climb);
  } catch (err) {
    next(err);
    }
});



router.post("/api/climbs", async (req, res, next) => {
  try {
    const { name, grade } = req.body;
    if (!name || !grade) {
      return res.status(400).json({ error: "Name and grade are required" });
    }
    const climb = await createClimb(name, grade);
    res.status(201).json(climb);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)){
      return res.status(400).json({ error: "Invalid climb id" });
    }
    const { name, grade } = req.body;
    if (!name || !grade) {
      return res.status(400).json({ error: "Name and grade are required" });
    }
    const updated = await updateClimb(id, name, grade);
    if (!updated) {
      return res.status(404).json({ error: "Climb not found" });
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }

module.exports = router;