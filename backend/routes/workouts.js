import express from "express";

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ msg: "GET a single workout", id });
});

// POST a new workout
router.post("/", (req, res) => {
  const workout = req.body;
  res.json({ msg: "POST a new workout", workout });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ msg: "DELETE a workout", id });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const updatedWorkout = req.body;
  res.json({ msg: "UPDATE a workout", id, updatedWorkout });
});

export default router;
