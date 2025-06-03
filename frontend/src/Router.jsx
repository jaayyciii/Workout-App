import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LogIn />} />
          <Route path="signup" element={<Signup />} />
          {/* Add more routes as needed */}
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
