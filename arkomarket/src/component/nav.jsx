import React from "react";
import "../css/filter.css";
import "../css/nav.css";
import NotificaionIcon from "../Asset/notification.svg";
import logo from "../Asset/ArkoMarket.svg";
import userIcon from "../Asset/user.svg";
import Navbar from "react-bootstrap/Navbar";
import "../scss/navbar.scss";
import { Container, Nav, Form, FormControl } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="ml-5 navBar" style={{}}>
        <Container>
          <div style={{ display: "flex" }}>
            <Navbar.Brand href="/" className="logo">
              <img src={logo} alt=".logo" className="align-middle" />
            </Navbar.Brand>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search products, services"
                className="me-2 searchBar "
                aria-label="Search"
                aria-hidden="true"
              />
            </Form>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav float-end ">
            <Nav className="me-auto float-end">
              <NavLink href="#" className="notificationicon">
                <img src={NotificaionIcon} alt="notification.jpeg" />
              </NavLink>
              <NavLink href="#" className="loginbtnNav ">
                <img src={userIcon} alt="user" className="px-2" />
                Login
              </NavLink>
              <button className="freeadsbtn">Post Free Ads</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className="mt-2 nav-footer-container">
          <Navbar.Collapse id="basic-navbar-nav" className="nav-footer-Btn">
            <div className="vehicle-hover">
            <NavLink className="nav-Vehicles" href="/product-details">
              Vehicles
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              
            </NavLink>
            </div>
            <NavLink href="/product-details">Properties</NavLink>
            <NavLink href="#">Mobiles</NavLink>
            <NavLink href="#">Family Needs</NavLink>
            <NavLink href="#">Services</NavLink>
            <NavLink href="#">Electronics & Appliances</NavLink>
            <NavLink href="#">Furnitures</NavLink>
            <NavLink href="#">Books, Sports & Hobbies</NavLink>
            <NavLink href="#">Travels & Trips</NavLink>
            <NavLink href="#">Pets</NavLink>
            <NavLink href="#">Others</NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
