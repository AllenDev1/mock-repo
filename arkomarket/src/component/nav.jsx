import React from "react";
import "../css/filter.css";
import "../css/nav.css";
import NotificaionIcon from "../Asset/notification.svg";
import logo from "../Asset/ArkoMarket.svg";
import userIcon from "../Asset/user.svg";
import Navbar from "react-bootstrap/Navbar";
import "../scss/navbar.scss";
import { Container, Nav, Form, FormControl } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="ml-5 navBar" style={{}}>
        <Container>
          <div style={{ display: "flex" }}>
            {" "}
            <Navbar.Brand href="/" className="logo">
              <img src={logo} alt=".logo" className="align-middle" />
            </Navbar.Brand>
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

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav float-end ">
            <Nav className="me-auto float-end">
              <Nav.Link href="#" className="notificationicon">
                <img src={NotificaionIcon} alt="notification.jpeg" />
              </Nav.Link>
              <Nav.Link href="#" className="loginbtnNav ">
                <img src={userIcon} alt="user" className="px-2" />
                Login
              </Nav.Link>

              <button className="freeadsbtn">Post Free Ads</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className="mt-2 nav-footer-container">
          <Navbar.Collapse id="basic-navbar-nav" className="nav-footer-Btn">
            <Nav.Link href="#">
            Vehicles 
            </Nav.Link>
            <Nav.Link href="#">
            Properties 
            </Nav.Link>
            <Nav.Link href="#">
            Mobiles
            </Nav.Link>
            <Nav.Link href="#">
            Family Needs
            </Nav.Link>
            <Nav.Link href="#">
            Services
            </Nav.Link>
            <Nav.Link href="#">
            Electronics & Appliances
            </Nav.Link>
            <Nav.Link href="#">
            Furnitures
            </Nav.Link>
            <Nav.Link href="#">
            Books, Sports & Hobbies
            </Nav.Link>
            <Nav.Link href="#">
            Travels & Trips
            </Nav.Link>
            <Nav.Link href="#">
            Pets
            </Nav.Link>
            <Nav.Link href="#" >
            Others
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
