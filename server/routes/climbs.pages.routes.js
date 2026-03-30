const express = require("express");
const router = express.Router();
const {
  getAllClimbs,
  createClimb,
  getClimbById,
  updateClimb,
  deleteClimb,
} = require("../models/climbs.models");

router.get("/climbs", async (req, res, next) => {
  try {
    const climbs = await getAllClimbs();
    res.render("climbs/index", { climbs });
  } catch (err) {
    next(err);
  }
});

router.get("/climbs/new", async (req, res, next) => {
  res.render("climbs/new");
});

router.get("/climbs/:id/edit", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const climb = await getClimbById(id);
    if (!climb) return res.status(404).send("Climb not found");
    res.render("climbs/edit", { climb });
  } catch (err) {
    next(err);
  }
});

router.post("/climbs", async (req, res, next) => {
  try {
    const { name, grade } = req.body;
    if (!name || !grade)
      return res.status(400).send("Name and grade are required");
    await createClimb(name, grade);
    res.redirect("/climbs");
  } catch (err) {
    next(err);
  }
});

router.put("/climbs/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { name, grade } = req.body;
    if (!name || !grade)
      return res.status(400).send("Name and grade are required");

    const updated = await updateClimb(id, name, grade);
    if (!updated) return res.status(404).send("Climb not found");

    res.redirect("/climbs");
  } catch (err) {
    next(err);
  }
});

router.delete("/climbs/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const deleted = await deleteClimb(id);
    if (!deleted) return res.status(404).send("Climb not found");
    res.redirect("/climbs");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
