import React from 'react'
import {Container, Form, FormControl } from "react-bootstrap";
import "../scss/help.scss";

const Helpbody = () => {
  return (<>
    <div className="main-hel">
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
    </div>
    <Container>
      <div className="main-link-head">
      <div className="link-heads">
        <a href="#">Buyer's FAQs</a>
        <a href="#">Seller's FAQs</a>
        <a href="#">General Queries</a>
        <a href="#">Trust and Saftey</a>
        <a href="#">Privacy</a>
        <a href="#">Terms of use</a>
        <a href="#">Community Terms</a>
      </div>
      <div className="var-queries">
        
      </div>

      </div>

    </Container>
    </>
  );
};

export default Helpbody;