import React from "react";
import "../css/filter.css";
import "../css/nav.css";
import NotificaionIcon from "../Asset/notification.svg";
import logo from "../Asset/ArkoMarket.svg";
import userIcon from "../Asset/user.svg";
import Navbar from "react-bootstrap/Navbar";
import "../scss/navbar.scss";
import { Container, Nav, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserNav = () => {
  let navigate = useNavigate();
  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="ml-5 navBar"
        style={{ height: "auto" }}
      >
        <Container>
          <div style={{ display: "flex" }}>
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
              <NavLink href="#" className="notificationicon">
                <img src={NotificaionIcon} alt="notification.jpeg" />
              </NavLink>
              <NavLink href="#" className="loginbtnNav ">
                <img src={userIcon} alt="user" className="px-2" />
              </NavLink>

              <NavLink className="new-ads-btn" type="button" href="post-new-ads">
                New Ads
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default UserNav;
