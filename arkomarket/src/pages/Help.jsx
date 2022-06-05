import React from "react";
import Helpnavbar from "../component/Helpnavbar";
import Helpbody from "../component/helpbody.jsx";
import Queriesnav from "../component/queriesnav";
import Querieslink from "../component/querieslink";
import { Container } from "react-bootstrap";

const Help = () => {
 
  return (
    <>
      <Container >
        <Helpnavbar />
      </Container>
      <Helpbody />
      <Container>
        <Querieslink />
        <Queriesnav />
      </Container>
    </>
  );
};

export default Help;
