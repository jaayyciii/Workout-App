import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts");
        if (!response.ok) throw new Error("Failed to fetch workouts");
        const json = await response.json();
        setWorkouts(json);
      } catch (error) {
        setWorkouts([]);
        console.error(error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts === null ? (
          <p>Loading...</p>
        ) : workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        ) : (
          <p>No workouts found.</p>
        )}
      </div>
    </div>
  );
}
