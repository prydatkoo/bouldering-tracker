const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../../client/index.html"));
});

router.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../../client/about.html"));
});

router.get("/home", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../../client/home.html"));
});

router.get("/signin", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../../client/signin.html"));
});

router.get("/WIP", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../../client/WIP.html"));
});

module.exports = router;
