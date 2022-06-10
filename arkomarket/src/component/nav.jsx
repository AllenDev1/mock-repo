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
import Generalnotification from "./Generalnotifi";
import Dropdown from "react-bootstrap/Dropdown";
const NavBar = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      document.querySelector(".nav-footer-container").style.display = "none";
      document.querySelector(".upper-nav-sec").style.borderBottom = "none";
      document.querySelector(".nBS").style.marginBottom = "7px";
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
              <p className="nav-Vehicles" href="/">
                Vehicles
                <div class="dropdown-content">
                  <a href="vehicles">All</a>
                  <a href="cars">Cars</a>
                  <a href="motorcycles">Motorcycles</a>
                  <a href="scooters">Scooters</a>
                  <a href="bicycle">Bicycle</a>
                  <a href="other-vehicles">Other vehicles</a>
                  <a href="spare-parts">Spare parts</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p href="/">
                Properties
                <div class="dropdown-content">
                  <a href="properties">All</a>
                  <a href="lands-plots">Lands & plots</a>
                  <a href="shops-offices">Shops & Offices</a>
                  <a href="housesapartments">Houses & Apartments</a>
                  <a href="roomsflats">Rooms & Flats</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p href="/">
                Mobiles
                <div class="dropdown-content">
                  <a href="mobile">All</a>
                  <a href="mobile-phones">Mobile Phones</a>
                  <a href="tablets">Tablets</a>
                  <a href="wearables">Wearables</a>
                  <a href="accessories">Accessories</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p href="/">
                Family Needs
                <div class="dropdown-content">
                  <a href="family-needs">All</a>
                  <a href="men-stuffs">Men stuffs</a>
                  <a href="women-stuffs">Women stuffs</a>
                  <a href="kids-stuffs">Kids stuffs</a>
                  <a href="jobs">Jobs</a>
                  <a href="foods">Foods</a>
                  <a href="gifts">Gifts</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p>
                Services
                <div class="dropdown-content">
                  <a href="services">All</a>
                  <a href="cleaning">Cleaning</a>
                  <a href="education-classes">Education & Classes</a>
                  <a href="move-furnitures">Move Furnitures</a>
                  <a href="agriculture">Agriculture</a>
                  <a href="construction">Construction</a>
                  <a href="maintainance">Maintainance</a>
                  <a href="occassion">Occassion</a>
                  <a href="health-beauty">Health & Beauty</a>
                  <a href="other-services">Other services</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p >
                Electronics & Appliances
                <div class="dropdown-content">
                  <a href="electronics-appliances">All</a>
                  <a href="printers">Printers</a>
                  <a href="computers-laptops">Computers & monitors</a>
                  <a href="laptops">Laptops</a>
                  <a href="accessories-parts">Accessories & parts</a>
                  <a href="cameras-lenses">Cameras & Lenses</a>
                  <a href="game-entertainment">Game and Entertainment</a>
                  <a href="audio-video"> Audio & Video</a>
                  <a href="tvs"> TVs</a>
                  <a href="Fridge">Fridge</a>
                  <a href="ac-heater">ACs & Heater</a>
                  <a href="washing-machines">Washing machines</a>
                  <a href="kitchen-other-appliances">Kitchen & other Appliances</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p href="furnitures">
                Furnitures
                <div class="dropdown-content">
                  <a href="furnitures">All</a>
                  <a href="office-furnitures">Office Furnitures</a>
                  <a href="bed-mat">Bed & mattresses</a>
                  <a href="sofa">Sofa sets</a>
                  <a href="home-furnitures">Other Home Furnitures</a>
                  <a href="kids-furnitures">Kid's Furnitures</a>
                  <a href="decor">Home, Decor and Garden</a>
                  <a href="household-furnitures">Other Household Items</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p href="/">
                Books, Sports & Hobbies
                <div class="dropdown-content">
                  <a href="books-sports-hobbies">All</a>
                  <a href="#">Books</a>
                  <a href="#">Gym & fitness</a>
                  <a href="#">Musical Instruments</a>
                  <a href="#">Sports Equipments</a>
                  <a href="#">Other Hobbies</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p href="/">
                Travels & Trips
                <div class="dropdown-content">
                  <a href="travels-trips">All</a>
                  <a href="#">Tourism</a>
                  <a href="#">Trips & Camping</a>
                  <a href="#">Cars & Bike Rentals</a>
                  <a href="#">Hotels & Homestays</a>
                  <a href="#">Other</a>
                </div>
              </p>
            </div>

            <div className="total-hover">
              <p href="/">
                Pets
                <div class="dropdown-content drop-r">
                  <a href="pets">All</a>
                  <a href="#">Fishes & Aquarium</a>
                  <a href="#">Pet foods & Accessories</a>
                  <a href="#">Dogs & Cats</a>
                  <a href="#">Birds</a>
                  <a href="#">Goat,Buffalo and other pets</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p href="/">
                Others
                <div class="dropdown-content drop-r">
                  <a href="others">All</a>
                  <a href="#">Arts & Handicrafts</a>
                  <a href="#">Antique Items</a>
                  <a href="#">Charity</a>
                  <a href="#">Others</a>
                </div>
              </p>
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
