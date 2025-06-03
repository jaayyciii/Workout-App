import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { WorkoutProvider } from "./context/WorkoutContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import MainRouter from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <WorkoutProvider>
      <MainRouter />
    </WorkoutProvider>
  </AuthProvider>
);
