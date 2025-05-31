import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { WorkoutProvider } from "./context/WorkoutContext.jsx";
import MainRouter from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <WorkoutProvider>
    <MainRouter />
  </WorkoutProvider>
);
