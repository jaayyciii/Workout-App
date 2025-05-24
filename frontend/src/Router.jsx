import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WorkoutProvider } from "./Context";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

export default function MainRouter() {
  return (
    <Router>
      <WorkoutProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </WorkoutProvider>
    </Router>
  );
}
