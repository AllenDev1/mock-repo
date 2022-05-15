import React from "react";
import "../css/style.css";
import Filter from "../component/filter";

import { Card, CardGroup, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../component/nav";
import Footer from "../component/footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="mainBody" style={{marginTop:'39.5px'}}>
        <Filter />
        <Footer/>
      </div>
    
    </>
  );
};

export default Home;
