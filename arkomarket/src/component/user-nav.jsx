import React from "react";
import "../css/filter.css";
import "../css/nav.css";
import "../scss/navbar.scss";
import "../scss/style.scss"
import NotificaionIcon from "../Asset/notification.svg";
import logo from "../Asset/ArkoMarket.svg";
import userIcon from "../Asset/user.svg";
import plus from "../Asset/plus.svg";
import Navbar from "react-bootstrap/Navbar";
import "../scss/navbar.scss";
import { Container, Nav, Form, FormControl, Dropdown } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Profiledetails from "./profiledetails";
import Generalnotification from "./Generalnotifi";

const UserNav = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/post-new-ads`;
    navigate(path);
  };
  window.onscroll = function () {
    document.getElementById("user-naveBar").style.borderBottom =
      "1px solid rgba(0, 0, 0, 0.15)";
  };

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="ml-5 navBar"
        id="user-naveBar"
        style={{ paddingBottom: "9.5px", height: "58px" }}
      >
        <Container className="user-nav-sec " id="upper-nav-sec">
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
            <Nav className="me-auto float-end user-nav-btn">
              <NavLink href="#" className="notificationicon">
                <Dropdown
                  className="dropdown-notification"
                  align={{ md: "end" }}
                >
                  <Dropdown.Toggle>
                    <img src={NotificaionIcon} alt="notification.jpeg" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Generalnotification />
                  </Dropdown.Menu>
                </Dropdown>
              </NavLink>
              <NavLink href="#" className="loginbtnNav ">
                <Dropdown
                  className="dropdown-notification"
                  align={{ md: "end" }}
                >
                  <Dropdown.Toggle>
                    <img src={userIcon} alt="user" className="px-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Profiledetails />
                  </Dropdown.Menu>
                </Dropdown>
              </NavLink>

              <button
                className="new-ads-btn user-new-ads-btn"
                type="button"
                onClick={routeChange}
              >
                <img src={plus} alt="" srcset="" /> New Ads
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default UserNav;
