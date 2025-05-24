import { createContext, useContext, useState, useEffect } from "react";

const WorkoutContext = createContext();

export function useWorkoutContext() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkoutContext must be used within a WorkoutProvider");
  }
  return context;
}

export function WorkoutProvider({ children }) {
  const [workouts, setWorkouts] = useState([]);

  async function fetchWorkouts() {
    try {
      const response = await fetch("/api/workouts");
      if (!response.ok) throw new Error("Failed to fetch workouts");
      const json = await response.json();
      setWorkouts(json);
    } catch (error) {
      setWorkouts([]);
      console.error(error);
    }
  }

  useEffect(() => {
    fetchWorkouts();
  }, []);

  async function createWorkout(workout) {
    try {
      const response = await fetch("/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workout),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to create workout");
      }
      const json = await response.json();
      setWorkouts((prev) => [...prev, json]);
      return json;
    } catch (error) {
      throw error;
    }
  }

  return (
    <WorkoutContext.Provider value={{ workouts, createWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
}
