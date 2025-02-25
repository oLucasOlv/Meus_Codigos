const express = require("express");
const app = express();

app.use(express.json());

const tasksRoutes = require("./routes/tasksRoutes");
const index = require("./routes/index");

app.use("/tasks", tasksRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
