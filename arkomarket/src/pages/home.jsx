import React from "react";
import "../css/style.css";
import Filter from "../component/filter";
import Sort from "../component/sort";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../component/profile";

const Home = () => {
  return (
    <>
      <Filter />
      <Sort />
      <Profile/>
    </>
  );
};

export default Home;
