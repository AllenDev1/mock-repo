import React from "react";
import "../css/filter.css";
import "../css/nav.css";
import NotificaionIcon from "../Asset/Vector.svg";
import userIcon from "../Asset/user.svg";
import Navbar from "react-bootstrap/Navbar";
import "../scss/navbar.scss";
import { Container, Nav, Form, FormControl } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="ml-5 navBar">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 searchBar fa fa-search"
              aria-label="Search"
              aria-hidden="true"
            />
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href="#" className="">
                <img src={NotificaionIcon} alt="notification.jpeg" />
              </Nav.Link>
              <Nav.Link href="#" className="loginbtnNav ">
                <img src={userIcon} alt="user" className="px-2" />
                Login
              </Nav.Link>
              <Nav.Link href="#" className="">
                Post Free Ads
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
