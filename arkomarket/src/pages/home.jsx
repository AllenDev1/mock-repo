import React from "react";
import "../css/style.css";
import Filter from "../component/filter";
import Sort from "../component/sort";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../component/nav";
import Generalnotification from "../component/Generalnotifi";
import Profiledetails from "../component/profiledetails";
import Login from "../component/login";
const Home = () => {
  return (
    <>
     <NavBar />
      <Filter />
      <Sort />
     
    </>
  );
};

export default Home;
