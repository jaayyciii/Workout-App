import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Layout from "./pages/Layout";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRoute />}>
            <Route index element={<LogIn />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="home/*" element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
