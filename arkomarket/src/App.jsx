import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Productdetails from "./pages/productdetails";
import UserProfile from "./pages/user-profile";

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/product-details" element={<Productdetails/>} />
      <Route path="/user-profile" element={<UserProfile/>} />
    </Routes>

  </Router>
  
  </>
  );
}

export default App;
