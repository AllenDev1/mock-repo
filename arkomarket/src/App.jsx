import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Productdetails from "./pages/productdetails";

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/product-details" element={<Productdetails/>} />
    </Routes>

  </Router>
  
  </>
  );
}

export default App;
