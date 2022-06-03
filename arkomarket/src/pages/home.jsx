import React from "react";
import "../css/style.css";
import Filter from "../component/filter";
import Sort from "../component/sort";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../component/nav";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <NavBar />
      <Container className="letsSee">
        <Filter />
        <Sort />
      </Container>
    </>
  );
};

export default Home;
