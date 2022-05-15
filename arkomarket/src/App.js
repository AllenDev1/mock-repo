import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home";

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
  
  </>
  );
}

export default App;
