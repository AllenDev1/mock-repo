import React from "react";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <>
      <Container style={{width:"100vw", height:"30vh", display:'flex', justifyContent:'center', marginTop:'100px'}} className="">
        <h1>404. PAGE NOT FOUND</h1>
      </Container>
    </>
  );
};

export default NotFound;
