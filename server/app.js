require("dotenv").config();
const express = require("express");
const path = require("path");
const pagesRouter = require("./routes/pages.routes");
const climbsRouter = require("./routes/climbs.routes");
const climbsPagesRouter = require("./routes/climbs.pages.routes");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client")));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", pagesRouter);
app.use("/", climbsPagesRouter);
app.use("/", climbsRouter);

app.use((_req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/WIP.html"));
});

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
