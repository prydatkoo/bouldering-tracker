const express = require("express");
const path = require("path");
const pagesRouter = require("./routes/pages.routes");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../client")));
app.use("/", pagesRouter);

app.get("/climbs/:id", (req, res) => {
  res.status(200).send(`Climb id: ${req.params.id}`);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../client/WIP.html"));
});

app.listen(PORT, () => {
  console.log(`Started server on port ${PORT}`);
});
