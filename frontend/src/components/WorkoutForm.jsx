import { useWorkoutContext } from "../hooks/useWorkoutContext.jsx";
import { useAuthContext } from "../hooks/useAuthContext.jsx";
import { useState } from "react";

export default function WorkoutForm() {
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();
  const [workout, setWorkout] = useState({ title: "", load: "", reps: "" });
  const [error, setError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!user) {
      setError("You must be logged in to add a workout.");
      return;
    }

    const response = await fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(workout),
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setWorkout({ title: "", load: "", reps: "" });
      setError(null);
      setErrorFields([]);
    } else {
      setError(json.error);
      setErrorFields(json.errorFields || []);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Exercise Name:</label>
      <input
        type="text"
        onChange={(e) => setWorkout({ ...workout, title: e.target.value })}
        className={errorFields.includes("title") ? "error" : ""}
        value={workout.title}
      />
      <label>Load (kg):</label>
      <input
        type="number"
        onChange={(e) => setWorkout({ ...workout, load: e.target.value })}
        className={errorFields.includes("load") ? "error" : ""}
        value={workout.load}
      />
      <label>Reps:</label>
      <input
        type="number"
        onChange={(e) => setWorkout({ ...workout, reps: e.target.value })}
        className={errorFields.includes("reps") ? "error" : ""}
        value={workout.reps}
      />
      <button> Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
