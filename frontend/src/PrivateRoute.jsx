import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

export default function PrivateRoute() {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/" replace />;
}
