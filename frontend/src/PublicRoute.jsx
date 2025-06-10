import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

export default function PublicRoute() {
  const { user } = useAuthContext();

  return user ? <Navigate to="/home" replace /> : <Outlet />;
}
