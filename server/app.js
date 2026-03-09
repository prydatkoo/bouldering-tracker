const express = require("express");
const path = require("path");
const pagesRouter = require("./routes/pages.routes");
const climbsRouter = require("./routes/climbs.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.use("/", pagesRouter);
app.use("/api/climbs", climbsRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/WIP.html"));
});

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
