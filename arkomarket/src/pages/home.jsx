import React from "react";
import "../css/style.css"
import Filter from "../component/filter";

import { Card, CardGroup, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../component/nav";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="mainBody">
      <Filter />
      </div>
    
    </>
  );
};

export default Home;
