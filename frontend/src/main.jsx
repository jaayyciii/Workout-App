import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { WorkoutProvider } from "./context/Context.jsx";
import MainRouter from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <WorkoutProvider>
    <MainRouter />
  </WorkoutProvider>
);
