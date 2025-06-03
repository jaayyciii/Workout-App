import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsLoading(true);

    // remove user from local storage
    localStorage.removeItem("user");

    // update the auth context
    dispatch({ type: "LOGOUT" });

    setIsLoading(false);
  };

  return { logout, isLoading, error };
};
