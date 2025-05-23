import { WorkoutContext } from "../context/Context.jsx";
import { useContext } from "react";

export default function useWorkoutContext() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("useWorkoutContext must be used within a WorkoutProvider");
  }

  return context;
}
