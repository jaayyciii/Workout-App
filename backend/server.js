import dotenv from "dotenv";
dotenv.config();
import express from "express";

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use(express.json());

// routes
import workoutsRouter from "./routes/workouts.js";
app.use("/api/workouts", workoutsRouter);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT + "!");
});
