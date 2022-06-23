import React from 'react'
import {Container, Form, FormControl } from "react-bootstrap";
import "../scss/help.scss";

const Helpbody = () => {
 
  return (<>
    <Container className="main-hel">
        <p>Hi, How can we help?</p>
        <div>
        <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search products, services"
                className="me-2 searchBar"
                aria-label="Search"
                aria-hidden="true"
              />
            </Form>
        </div>
    </Container>
    
    </>
  );
};

export default Helpbody;