import React from "react";
import Helpnavbar from "../component/Helpnavbar";
import Helpbody from "../component/helpbody.jsx";
import Queriesnav from "../component/queriesnav";
import Querieslink from "../component/querieslink";
import { Container } from "react-bootstrap";
import {
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";


const Help = () => {
  return (
    <>
     
       
          <Container><Helpnavbar /></Container>
          <Helpbody />
          <Container>
            <Querieslink />
            <Queriesnav/>
          </Container>
        
     
    </>
  );
};

export default Help;
