const express = require("express");
const router = express.Router();
const { getAllClimbs, createClimb } = require("../models/climbs.models");

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

module.exports = router;
