import { useState } from "react";
import { useWorkoutContext } from "../Context";

export default function WorkoutForm() {
  const { createWorkout } = useWorkoutContext();
  const [workout, setWorkout] = useState({ title: "", load: "", reps: "" });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createWorkout(workout);
      setWorkout({ title: "", load: "", reps: "" });
    } catch (err) {
      console.error("Error creating workout:", err);
      setError("Failed to create workout. Please try again.");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Exercise Name:</label>
      <input
        type="text"
        onChange={(e) => setWorkout({ ...workout, title: e.target.value })}
        value={workout.title}
      />
      <label>Load (kg):</label>
      <input
        type="number"
        onChange={(e) => setWorkout({ ...workout, load: e.target.value })}
        value={workout.load}
      />
      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
        value={workout.reps}
      />
      <button> Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
