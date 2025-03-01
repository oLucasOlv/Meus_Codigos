import express from "express";
import tasksRoutes from "./routes/tasksRoutes.js"; 

const app = express();

app.use(express.json());

app.use("/tasks", tasksRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

export default app;
