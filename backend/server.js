import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use(express.json());
app.use(cors());

// routes
import workoutsRouter from "./routes/routes.js";
app.use("/api/workouts", workoutsRouter);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Server is running on Port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
