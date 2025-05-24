import { useWorkoutContext } from "../Context";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

export default function Home() {
  const { workouts } = useWorkoutContext();

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
      <WorkoutForm />
    </div>
  );
}
