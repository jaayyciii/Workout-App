import express from "express";
import {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/controllers.js";
const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// CREATE a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

export default router;
