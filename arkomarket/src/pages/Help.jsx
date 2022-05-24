import React from "react";
import Helpnavbar from "../component/Helpnavbar";
import Helpbody from "../component/helpbody.jsx";
import Queriesnav from "../component/queriesnav";
import Querieslink from "../component/querieslink";
import { Container} from "react-bootstrap";


const Help = () => {
  return (
    <>
      <Helpnavbar />
      <Helpbody />
      <Container>
      <Querieslink/>
      <Queriesnav />
      </Container>
      

      
    </>
  );
};

export default Help;
