import React from "react";
import "../css/style.css";
import Filter from "../component/filter";
import Sort from "../component/sort";
import profile from "../component/profile";
import "bootstrap/dist/css/bootstrap.min.css";   

import { Card, CardGroup, Button, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../component/nav";
import Footer from "../component/footer";
import Productdetails from "./productdetails";

const Home = () => {
  return (
    <>
    <NavBar />
    <Filter />
     <Sort/>
     <Footer />
     <profile/>
    </>
  );
};

export default Home;
