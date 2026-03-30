const express = require("express");
const router = express.Router();
const { getAllClimbs } = require("../models/climbs.models");

router.get("climbs", async (req, res, next) => {
  try {
    const climbs = await getAllClimbs();
    res.render("climbs/index", { climbs });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
