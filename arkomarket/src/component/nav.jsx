import React, { useState } from "react";
import "../css/filter.css";
import "../css/nav.css";
import NotificaionIcon from "../Asset/notification.svg";
import logo from "../Asset/ArkoMarket.svg";
import userIcon from "../Asset/user.svg";
import Navbar from "react-bootstrap/Navbar";
import "../scss/navbar.scss";
import { Container, Nav, Form, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-bootstrap";
import Login from "./login.jsx";
// import Cars from "../component/dropdowns/Vehicles/cars";
import Generalnotification from "./Generalnotifi";
import Dropdown from "react-bootstrap/Dropdown";
const NavBar = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      document.querySelector(".nav-footer-container").style.display = "none";
      document.querySelector(".upper-nav-sec").style.borderBottom = "none";
      document.querySelector(".nBS").style.paddingBottom = "0px";
    } else {
      document.querySelector(".upper-nav-sec").style.borderBottom = "none";
      document.querySelector(".nfc").style.display = "flex";
    }
  });

  return (
    <>
      <Navbar bg="white" expand="lg" className="ml-5 navBar nBS" style={{}}>
        <Container className="upper-nav-sec">
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
              <NavLink
                href="#"
                className="loginbtnNav "
                onClick={() => setShow(true)}
              >
                <img src={userIcon} alt="user" className="px-2" />
                Login
              </NavLink>
              <LoginForm show={show} setShow={setShow} />
              <button className="freeadsbtn">Post Free Ads</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className=" nav-footer-container nfc">
          <Navbar.Collapse id="basic-navbar-nav" className="nav-footer-Btn">
            <div className="total-hover">
              <NavLink className="nav-Vehicles" href="#">
                Vehicles
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Cars</a>
                  <a href="#">Motorcycles</a>
                  <a href="#">Scooters</a>
                  <a href="#">Bicycle</a>
                  <a href="#">Other vehicles</a>
                  <a href="#">Spare parts</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Properties
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Lands & plots</a>
                  <a href="#">Shops & Offices</a>
                  <a href="#">Houses & Apartments</a>
                  <a href="#">Rooms & Flats</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Mobiles
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Mobiles</a>
                  <a href="#">Tablets</a>
                  <a href="#">Wearables</a>
                  <a href="#">Accessories</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Family Needs
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Men stuffs</a>
                  <a href="#">Women stuffs</a>
                  <a href="#">Kids stuffs</a>
                  <a href="#">Jobs</a>
                  <a href="#">Foods</a>
                  <a href="#">Gifts</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Services
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Cleaning</a>
                  <a href="#">Education & Classes</a>
                  <a href="#">Move Furnitures</a>
                  <a href="#">Agriculture</a>
                  <a href="#">Construction</a>
                  <a href="#">Maintainance</a>
                  <a href="#">Occassion</a>
                  <a href="#">Health & Beauty</a>
                  <a href="#">Other services</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Electronics & Appliances
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Printers & monitors</a>
                  <a href="#">Computers & Laptops</a>
                  <a href="#">Accessories & parts</a>
                  <a href="#">Cameras & Lenses</a>
                  <a href="#">Game and Entertainment</a>
                  <a href="#">TV, Audio & Video</a>
                  <a href="#">Fridge</a>
                  <a href="#">ACs & Heater</a>
                  <a href="#">Washing machines</a>
                  <a href="#">Kitchen & other Appliances</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Furnitures
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Office Furnitures</a>
                  <a href="#">Bed & mattresses</a>
                  <a href="#">Sofa sets</a>
                  <a href="#">Other Home Furnitures</a>
                  <a href="#">Kid's Furnitures</a>
                  <a href="#">Home, Decor and Garden</a>
                  <a href="#">Other Household Items</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Books, Sports & Hobbies
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Books</a>
                  <a href="#">Gyn & fitness</a>
                  <a href="#">Musical Instruments</a>
                  <a href="#">Sports Equipments</a>
                  <a href="#">Other Hobbies</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Travels & Trips
                <div class="dropdown-content">
                  <a href="#">All</a>
                  <a href="#">Tourism</a>
                  <a href="#">Trips & Camping</a>
                  <a href="#">Cars & Bike Rentals</a>
                  <a href="#">Hotels & Homestays</a>
                  <a href="#">Other</a>
                </div>
              </NavLink>
            </div>

            <div className="total-hover">
              <NavLink href="#">
                Pets
                <div class="dropdown-content drop-r">
                  <a href="#">All</a>
                  <a href="#">Fishes & Aquarium</a>
                  <a href="#">Pet foods & Accessories</a>
                  <a href="#">Dogs & Cats</a>
                  <a href="#">Birds</a>
                  <a href="#">Goat,Buffalo and other pets</a>
                </div>
              </NavLink>
            </div>
            <div className="total-hover">
              <NavLink href="#">
                Others
                <div class="dropdown-content drop-r">
                  <a href="#">All</a>
                  <a href="#">Arts & Handicrafts</a>
                  <a href="#">Antique Items</a>
                  <a href="#">Charity</a>
                  <a href="#">Others</a>
                </div>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

function LoginForm({ show, setShow }) {
  return (
    <>
      <div className="login-popup-modal">
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-100w"
          className="login-modal"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <div>
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Login />
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </>
  );
}
