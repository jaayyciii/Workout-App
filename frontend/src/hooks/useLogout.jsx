import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutContext();

  const logout = async () => {
    setError(null);
    setIsLoading(true);

    // remove user from local storage
    localStorage.removeItem("user");

    // update the auth context
    authDispatch({ type: "LOGOUT" });
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });

    setIsLoading(false);
  };

  return { logout, isLoading, error };
};
