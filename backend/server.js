import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use(express.json());

// routes
import workoutsRouter from "./routes/routes.js";
app.use("/api/workouts", workoutsRouter);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port " + process.env.PORT + "!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
