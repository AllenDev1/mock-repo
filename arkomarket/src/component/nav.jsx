import React, { useState, useEffect } from "react";
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
import "../scss/responsive scss/v2nav.scss";
import { useSearchParams } from "react-router-dom";
import MediaQuery from "react-responsive";
const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", navBarAnim);
    return () => {
      window.removeEventListener("scroll", navBarAnim);
    };
  });

  const navBarAnim = () => {
    if (window.innerWidth > 993) {
      if (window.scrollY > 30) {
        document.querySelector(".nav-footer-container").style.display = "none";
        document.querySelector(".upper-nav-sec").style.borderBottom = "none";
        document.querySelector(".nBS").style.marginBottom = "7px";
        document.querySelector(".nBS").style.paddingBottom = "0px";
        document.querySelector(".navBar").style.height = "auto";
      } else {
        document.querySelector(".upper-nav-sec").style.borderBottom = "none";
        document.querySelector(".nfc").style.display = "flex";
        document.querySelector(".nBS").style.paddingBottom = "0px";
        document.querySelector(".navBar").style.height = "85px";
      }
    }
  };
  //to fix the upper portion of nav bar

  return (
    <>
      <Navbar bg="white" expand="lg" className="ml-5 navBar nBS" style={{}}>
        <Container className="upper-nav-sec">
          <div className="logo-searchBar">
            <Navbar.Brand href="/" className="logo">
              <img src={logo} alt=".logo" className="align-middle" />
            </Navbar.Brand>
            {SearchNavBar()}
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
                    <Generalnotification /> {/** notification component */}
                  </Dropdown.Menu>
                </Dropdown>
              </NavLink>
              {/** login form button */}
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
        <Container className="nav-footer-container nfc">
          <Navbar.Collapse id="basic-navbar-nav" className="nav-footer-Btn">
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "vehicle"
                    ? " active-nav"
                    : "")
                }
              >
                Vehicles
                <div class="dropdown-content">
                  <a href="/vehicles/?active-nav=vehicle">All</a>
                  <a href="/cars/?active-nav=vehicle">Cars</a>
                  <a href="/motorcycles/?active-nav=vehicle">Motorcycles</a>
                  <a href="/scooters/?active-nav=vehicle">Scooters</a>
                  <a href="/bicycle/?active-nav=vehicle">Bicycle</a>
                  <a href="/other-vehicles/?active-nav=vehicle">
                    Other vehicles
                  </a>
                  <a href="/spare-parts/?active-nav=vehicle">Spare parts</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "properties"
                    ? " active-nav"
                    : "")
                }
              >
                Properties
                <div class="dropdown-content">
                  <a href="/properties/?active-nav=properties">All</a>
                  <a href="/lands-plots/?active-nav=properties">
                    Lands & plots
                  </a>
                  <a href="/shops-offices/?active-nav=properties">
                    Shops & Offices
                  </a>
                  <a href="/housesapartments/?active-nav=properties">
                    Houses & Apartments
                  </a>
                  <a href="/roomsflats/?active-nav=properties">Rooms & Flats</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "mobile"
                    ? " active-nav"
                    : "")
                }
              >
                Mobiles
                <div class="dropdown-content">
                  <a href="/mobile/?active-nav=mobile">All</a>
                  <a href="/mobile-phones/?active-nav=mobile">Mobile Phones</a>
                  <a href="/tablets/?active-nav=mobile">Tablets</a>
                  <a href="/wearables/?active-nav=mobile">Wearables</a>
                  <a href="/accessories/?active-nav=mobile">Accessories</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "family-needs"
                    ? " active-nav"
                    : "")
                }
              >
                Family Needs
                <div class="dropdown-content">
                  <a href="/family-needs/?active-nav=family-needs">All</a>
                  <a href="/men-stuffs/?active-nav=family-needs">Men stuffs</a>
                  <a href="/women-stuffs/?active-nav=family-needs">
                    Women stuffs
                  </a>
                  <a href="/kids-stuffs/?active-nav=family-needs">
                    Kids stuffs
                  </a>
                  <a href="/jobs/?active-nav=family-needs">Jobs</a>
                  <a href="/foods/?active-nav=family-needs">Foods</a>
                  <a href="/gifts/?active-nav=family-needs">Gifts</a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "services"
                    ? " active-nav"
                    : "")
                }
              >
                Services
                <div class="dropdown-content">
                  <a href="/services/?active-nav=services">All</a>
                  <a href="/cleaning/?active-nav=services">Cleaning</a>
                  <a href="/education-classes/?active-nav=services">
                    Education & Classes
                  </a>
                  <a href="/move-furnitures/?active-nav=services">
                    Move Furnitures
                  </a>
                  <a href="/electronics-repair/?active-nav=services">
                    Electronics Repair
                  </a>
                  <a href="/agriculture/?active-nav=services">Agriculture</a>
                  <a href="/construction/?active-nav=services">Construction</a>
                  <a href="/maintainance/?active-nav=services">Maintainance</a>
                  <a href="/occassion/?active-nav=services">Occassion</a>
                  <a href="/health-beauty/?active-nav=services">
                    Health & Beauty
                  </a>
                  <a href="/other-services/?active-nav=services">
                    Other services
                  </a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "electronics-appliances"
                    ? " active-nav"
                    : "")
                }
              >
                Electronics & Appliances
                <div class="dropdown-content">
                  <a href="/electronics-appliances/?active-nav=electronics-appliances">
                    All
                  </a>
                  <a href="/printers/?active-nav=electronics-appliances">
                    Printers
                  </a>
                  <a href="/computers-monitors/?active-nav=electronics-appliances">
                    Computers & monitors
                  </a>
                  <a href="/laptops/?active-nav=electronics-appliances">
                    Laptops
                  </a>
                  <a href="/accessories-parts/?active-nav=electronics-appliances">
                    Accessories & parts
                  </a>
                  <a href="/cameras-lenses/?active-nav=electronics-appliances">
                    Cameras & Lenses
                  </a>
                  <a href="/game-entertainment/?active-nav=electronics-appliances">
                    Game and Entertainment
                  </a>
                  <a href="/audio-video/?active-nav=electronics-appliances">
                    {" "}
                    Audio & Video devices
                  </a>
                  <a href="/tvs/?active-nav=electronics-appliances"> TVs</a>
                  <a href="/Fridge/?active-nav=electronics-appliances">
                    Fridge
                  </a>
                  <a href="/ac-heater/?active-nav=electronics-appliances">
                    ACs & Heater
                  </a>
                  <a href="/washing-machines/?active-nav=electronics-appliances">
                    Washing machines
                  </a>
                  <a href="/kitchen-other-appliances/?active-nav=electronics-appliances">
                    Kitchen & other Appliances
                  </a>
                </div>
              </p>
            </div>
            <div className="total-hover ">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "furnitures"
                    ? " active-nav"
                    : "")
                }
              >
                Furnitures
                <div class="dropdown-content">
                  <a href="/furnitures/?active-nav=furnitures">All</a>
                  <a href="/office-furnitures/?active-nav=furnitures">
                    Office Furnitures
                  </a>
                  <a href="/bed-mat/?active-nav=furnitures">Bed & mattresses</a>
                  <a href="/sofa/?active-nav=furnitures">Sofa sets</a>
                  <a href="/home-furnitures/?active-nav=furnitures">
                    Other Home Furnitures
                  </a>
                  <a href="/kids-furnitures/?active-nav=furnitures">
                    Kid's Furnitures
                  </a>
                  <a href="/decor/?active-nav=furnitures">
                    Home, Decor and Garden
                  </a>
                  <a href="/household-furnitures/?active-nav=furnitures">
                    Other Household Items
                  </a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "books-sports-hobbies"
                    ? " active-nav"
                    : "")
                }
              >
                Books, Sports & Hobbies
                <div class="dropdown-content">
                  <a href="/books-sports-hobbies/?active-nav=books-sports-hobbies">
                    All
                  </a>
                  <a href="/books/?active-nav=books-sports-hobbies">Books</a>
                  <a href="/gym-fitness/?active-nav=books-sports-hobbies">
                    Gym & fitness
                  </a>
                  <a href="/musical-instruments/?active-nav=books-sports-hobbies">
                    Musical Instruments
                  </a>
                  <a href="/sports-equipments/?active-nav=books-sports-hobbies">
                    Sports Equipments
                  </a>
                  <a href="/other-hobbies/?active-nav=books-sports-hobbies">
                    Other Hobbies
                  </a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "travels-trips"
                    ? " active-nav"
                    : "")
                }
              >
                Travels & Trips
                <div class="dropdown-content">
                  <a href="/travels-trips/?active-nav=travels-trips">All</a>
                  <a href="/tourism/?active-nav=travels-trips">Tourism</a>
                  <a href="/trips-camping/?active-nav=travels-trips">
                    Trips & Camping
                  </a>
                  <a href="/cars-bike-rentals/?active-nav=travels-trips">
                    Cars & Bike Rentals
                  </a>
                  <a href="/hotels-homestays/?active-nav=travels-trips">
                    Hotels & Homestays
                  </a>
                  <a href="/other/?active-nav=travels-trips">Other</a>
                </div>
              </p>
            </div>

            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "pets"
                    ? " active-nav"
                    : "")
                }
              >
                Pets
                <div class="dropdown-content drop-r">
                  <a href="/pets/?active-nav=pets">All</a>
                  <a href="/fishes-aquarium/?active-nav=pets">
                    Fishes & Aquarium
                  </a>
                  <a href="/pet-foods-accessories/?active-nav=pets">
                    Pet foods & Accessories
                  </a>
                  <a href="/dogs-cats/?active-nav=pets">Dogs & Cats</a>
                  <a href="/birds/?active-nav=pets">Birds</a>
                  <a href="/goat-buffalo-other-pets/?active-nav=pets">
                    Goat,Buffalo and other pets
                  </a>
                </div>
              </p>
            </div>
            <div className="total-hover">
              <p
                className={
                  "nav-Vehicles" +
                  (searchParams.get("active-nav") === "others"
                    ? " active-nav"
                    : "")
                }
              >
                Others
                <div class="dropdown-content drop-r">
                  <a href="/others/?active-nav=others">All</a>
                  <a href="/arts-handicrafts/?active-nav=others">
                    Arts & Handicrafts
                  </a>
                  <a href="/antique-items/?active-nav=others">Antique Items</a>
                  <a href="/charity/?active-nav=others">Charity</a>
                  <a href="/others-other/?active-nav=others">Others</a>
                </div>
              </p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* /// mobile view */}
      <MediaQuery maxWidth={993}>
        <Navbar bg="white" expand="lg" className="ml-5 navBar nBS" style={{}}>
          <Container className="upper-nav-sec">
            <div className="logo-searchBar">
              <Navbar.Brand href="/" className="logo">
                <img src={logo} alt=".logo" className="align-middle" />
              </Navbar.Brand>
              <button className="freeadsbtn">Post Free Ads</button>
            </div>
          </Container>
        </Navbar>
      </MediaQuery>
    </>
  );
};

export default NavBar;
function SearchNavBar() {
  return (
    <Form className="d-flex search-nav">
      <FormControl
        type="search"
        placeholder="Search products, services"
        className="me-2 searchBar"
        aria-label="Search"
        aria-hidden="true"
      />
    </Form>
  );
}

//model for login form
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
