import React, { useState } from "react";
import {
  Container,
  Form,
  Dropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../css/sort.css";
import "../scss/sort.scss";
import eye from "../Asset/eye.svg";
import { NavLink } from "react-router-dom";
import "../scss/responsive scss/v2Sort.scss";
import MediaQuery from "react-responsive";
import Push from "../Asset/library2/Vector.svg";
import categoty from "../Asset/catogry.svg";
const Sort = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <MediaQuery minWidth={994}>
        <Container className="">
          <div className="sort-container ">
            <Container>
              <div className="top-section">
                <div className="filter-buttons">
                  <button className="Sale">Sale</button>
                  <button className="Exchange">Exchange</button>
                  <button className="Required">Required</button>
                </div>
                <div className="sort-section">
                  <Form.Select aria-label="Default select">
                    <option> Sort By </option>
                    <option value="1">Price High to Low</option>
                    <option value="2">Price Low to High</option>
                    <option value="3">Oldest to Newest</option>
                    <option value="4">NeNewestw to Old</option>
                  </Form.Select>
                </div>
              </div>
            </Container>
            <Container>
              <div class="row sm md lg">
                <div class="card">
                  <NavLink to="/product-details">
                    <img
                      src="https://picsum.photos/200/300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <h5>The Codes and Conventions of TV Serial Dramas</h5>
                      </div>
                      <div class="lower-text">
                        <div class="card-price">
                          <p> Rs.13,000</p>
                        </div>
                        <div class="card-space">
                          <div class="card-age">
                            <p>Brand New</p>
                          </div>
                          <div class="card-seen">
                            <img src={eye} alt=".seen" />
                            <p>20000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="card">
                  <NavLink to="/product-details">
                    <img
                      src="https://picsum.photos/200/300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <h5>The Codes and Conventions of TV Serial Dramas</h5>
                      </div>
                      <div class="lower-text">
                        <div class="card-price">
                          <p> Rs.13,000</p>
                        </div>
                        <div class="card-space">
                          <div class="card-age">
                            <p>Brand New</p>
                          </div>
                          <div class="card-seen">
                            <img src={eye} alt=".seen" />
                            <p>20000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="card">
                  <NavLink to="/product-details">
                    <img
                      src="https://picsum.photos/200/300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <h5>The Codes and Conventions of TV Serial Dramas</h5>
                      </div>
                      <div class="lower-text">
                        <div class="card-price">
                          <p> Rs.13,000</p>
                        </div>
                        <div class="card-space">
                          <div class="card-age">
                            <p>Brand New</p>
                          </div>
                          <div class="card-seen">
                            <img src={eye} alt=".seen" />
                            <p>20000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="card">
                  <NavLink to="/product-details">
                    <img
                      src="https://picsum.photos/200/300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <h5>The Codes and Conventions of TV Serial Dramas</h5>
                      </div>
                      <div class="lower-text">
                        <div class="card-price">
                          <p> Rs.13,000</p>
                        </div>
                        <div class="card-space">
                          <div class="card-age">
                            <p>Brand New</p>
                          </div>
                          <div class="card-seen">
                            <img src={eye} alt=".seen" />
                            <p>20000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="page-container">
                  <div class="page-box">
                    <button class="">1</button>
                    <button class="">2</button>
                    <button class="">3</button>
                  </div>

                  <div class="page-next">
                    <button class="">Next</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </MediaQuery>

      {/* /// mobile view */}
      <MediaQuery maxWidth={993}>
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <div className="sort-container ">
            <Container>
              <Form className="d-flex search-nav">
                <FormControl
                  type="search"
                  placeholder="Search products, services"
                  className="me-2 searchBar "
                  aria-label="Search"
                  aria-hidden="true"
                />
              </Form>
            </Container>
            <Container>
              <div className="top-section v2-sale-dropdown">
                <div style={{ display: "flex", gap: "0px 8px" }}>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic ">
                      Sale <img src={Push} alt="" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div className="filter-buttons">
                        <button className="Sale">Sale</button>
                        <button className="Exchange">Exchange</button>
                        <button className="Required">Required</button>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>

                  <div className="sort-section">
                    <Form.Select aria-label="Default select">
                      <option> Sort By </option>
                      <option value="1">Newest to oldest</option>
                      <option value="2">Oldest to Newest</option>
                      <option value="3">Price : low to high</option>
                      <option value="4">Price : high to low</option>
                    </Form.Select>
                  </div>
                </div>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="Category-btn"
                >
                  <img src={categoty} alt="..." /> Category
                </Button>

                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  className="v2nav-Cato"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Browse Category</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Vehicles </Accordion.Header>
                        <Accordion.Body>
                          <a href="/vehicles/?active-nav=vehicle">All</a>
                          <a href="/cars/?active-nav=vehicle">Cars</a>
                          <a href="/motorcycles/?active-nav=vehicle">
                            Motorcycles
                          </a>
                          <a href="/scooters/?active-nav=vehicle">Scooters</a>
                          <a href="/bicycle/?active-nav=vehicle">Bicycle</a>
                          <a href="/other-vehicles/?active-nav=vehicle">
                            Other vehicles
                          </a>
                          <a href="/spare-parts/?active-nav=vehicle">
                            Spare parts
                          </a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Properties </Accordion.Header>
                        <Accordion.Body>
                          <a href="/properties/?active-nav=properties">All</a>
                          <a href="/lands-plots/?active-nav=properties">
                            Lands &amp; plots
                          </a>
                          <a href="/shops-offices/?active-nav=properties">
                            Shops &amp; Offices
                          </a>
                          <a href="/housesapartments/?active-nav=properties">
                            Houses &amp; Apartments
                          </a>
                          <a href="/roomsflats/?active-nav=properties">
                            Rooms &amp; Flats
                          </a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Mobiles</Accordion.Header>
                        <Accordion.Body>
                          <a href="/mobile/?active-nav=mobile">All</a>
                          <a href="/mobile-phones/?active-nav=mobile">
                            Mobile Phones
                          </a>
                          <a href="/tablets/?active-nav=mobile">Tablets</a>
                          <a href="/wearables/?active-nav=mobile">Wearables</a>
                          <a href="/accessories/?active-nav=mobile">
                            Accessories
                          </a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Family Needs</Accordion.Header>
                        <Accordion.Body>
                          <a href="/family-needs/?active-nav=family-needs">
                            All
                          </a>
                          <a href="/men-stuffs/?active-nav=family-needs">
                            Men stuffs
                          </a>
                          <a href="/women-stuffs/?active-nav=family-needs">
                            Women stuffs
                          </a>
                          <a href="/kids-stuffs/?active-nav=family-needs">
                            Kids stuffs
                          </a>
                          <a href="/jobs/?active-nav=family-needs">Jobs</a>
                          <a href="/foods/?active-nav=family-needs">Foods</a>
                          <a href="/gifts/?active-nav=family-needs">Gifts</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Services</Accordion.Header>
                        <Accordion.Body>
                          <a href="/services/?active-nav=services">All</a>
                          <a href="/cleaning/?active-nav=services">Cleaning</a>
                          <a href="/education-classes/?active-nav=services">
                            Education &amp; Classes
                          </a>
                          <a href="/move-furnitures/?active-nav=services">
                            Move Furnitures
                          </a>
                          <a href="/electronics-repair/?active-nav=services">
                            Electronics Repair
                          </a>
                          <a href="/agriculture/?active-nav=services">
                            Agriculture
                          </a>
                          <a href="/construction/?active-nav=services">
                            Construction
                          </a>
                          <a href="/maintainance/?active-nav=services">
                            Maintainance
                          </a>
                          <a href="/occassion/?active-nav=services">
                            Occassion
                          </a>
                          <a href="/health-beauty/?active-nav=services">
                            Health & Beauty
                          </a>
                          <a href="/other-services/?active-nav=services">
                            Other services
                          </a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>
                          Electronics & Appliances
                        </Accordion.Header>
                        <Accordion.Body>
                          <a href="/electronics-appliances/?active-nav=electronics-appliances">
                            All
                          </a>
                          <a href="/printers/?active-nav=electronics-appliances">
                            Printers
                          </a>
                          <a href="/computers-monitors/?active-nav=electronics-appliances">
                            Computers &amp; monitors
                          </a>
                          <a href="/laptops/?active-nav=electronics-appliances">
                            Laptops
                          </a>
                          <a href="/accessories-parts/?active-nav=electronics-appliances">
                            Accessories &amp; parts
                          </a>
                          <a href="/cameras-lenses/?active-nav=electronics-appliances">
                            Cameras &amp; Lenses
                          </a>
                          <a href="/game-entertainment/?active-nav=electronics-appliances">
                            Game and Entertainment
                          </a>
                          <a href="/audio-video/?active-nav=electronics-appliances">
                            Audio &amp; Video devices
                          </a>
                          <a href="/tvs/?active-nav=electronics-appliances">
                            {" "}
                            TVs
                          </a>
                          <a href="/Fridge/?active-nav=electronics-appliances">
                            Fridge
                          </a>
                          <a href="/ac-heater/?active-nav=electronics-appliances">
                            ACs &amp; Heater
                          </a>
                          <a href="/washing-machines/?active-nav=electronics-appliances">
                            Washing machines
                          </a>
                          <a href="/kitchen-other-appliances/?active-nav=electronics-appliances">
                            Kitchen &amp; other Appliances
                          </a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>Furnitures</Accordion.Header>
                        <Accordion.Body>
                          <a href="/furnitures/?active-nav=furnitures">All</a>
                          <a href="/office-furnitures/?active-nav=furnitures">
                            Office Furnitures
                          </a>
                          <a href="/bed-mat/?active-nav=furnitures">
                            Bed &amp; mattresses
                          </a>
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
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>
                          Books, Sports & Hobbies
                        </Accordion.Header>
                        <Accordion.Body>
                          <a href="/books-sports-hobbies/?active-nav=books-sports-hobbies">
                            All
                          </a>
                          <a href="/books/?active-nav=books-sports-hobbies">
                            Books
                          </a>
                          <a href="/gym-fitness/?active-nav=books-sports-hobbies">
                            Gym &amp; fitness
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
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="8">
                        <Accordion.Header>Travels & Trips</Accordion.Header>
                        <Accordion.Body>
                          <a href="/travels-trips/?active-nav=travels-trips">
                            All
                          </a>
                          <a href="/tourism/?active-nav=travels-trips">
                            Tourism
                          </a>
                          <a href="/trips-camping/?active-nav=travels-trips">
                            Trips &amp; Camping
                          </a>
                          <a href="/cars-bike-rentals/?active-nav=travels-trips">
                            Cars &amp; Bike Rentals
                          </a>
                          <a href="/hotels-homestays/?active-nav=travels-trips">
                            Hotels &amp; Homestays
                          </a>
                          <a href="/other/?active-nav=travels-trips">Other</a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9">
                        <Accordion.Header>Pets</Accordion.Header>
                        <Accordion.Body>
                          <a href="/pets/?active-nav=pets">All</a>
                          <a href="/fishes-aquarium/?active-nav=pets">
                            Fishes &amp; Aquarium
                          </a>
                          <a href="/pet-foods-accessories/?active-nav=pets">
                            Pet foods &amp; Accessories
                          </a>
                          <a href="/dogs-cats/?active-nav=pets">
                            Dogs &amp; Cats
                          </a>
                          <a href="/birds/?active-nav=pets">Birds</a>
                          <a href="/goat-buffalo-other-pets/?active-nav=pets">
                            Goat,Buffalo and other pets
                          </a>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="10">
                        <Accordion.Header>Others</Accordion.Header>
                        <Accordion.Body>
                          <a href="/others/?active-nav=others">All</a>
                          <a href="/arts-handicrafts/?active-nav=others">
                            Arts &amp; Handicrafts
                          </a>
                          <a href="/antique-items/?active-nav=others">
                            Antique Items
                          </a>
                          <a href="/charity/?active-nav=others">Charity</a>
                          <a href="/others-other/?active-nav=others">Others</a>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Container>

            <Container>
              <div class="row sm md lg">
                <div class="card">
                  <NavLink to="/product-details">
                    <img
                      src="https://picsum.photos/200/300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <h5>The Codes and Conventions of TV Serial Dramas</h5>
                      </div>
                      <div class="lower-text">
                        <div class="card-price">
                          <p> Rs.13,000</p>
                        </div>
                        <div class="card-space">
                          <div class="card-age">
                            <p>Brand New</p>
                          </div>
                          <div class="card-seen">
                            <img src={eye} alt=".seen" />
                            <p>20000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="card">
                  <NavLink to="/product-details">
                    <img
                      src="https://picsum.photos/200/300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <h5>The Codes and Conventions of TV Serial Dramas</h5>
                      </div>
                      <div class="lower-text">
                        <div class="card-price">
                          <p> Rs.13,000</p>
                        </div>
                        <div class="card-space">
                          <div class="card-age">
                            <p>Brand New</p>
                          </div>
                          <div class="card-seen">
                            <img src={eye} alt=".seen" />
                            <p>20000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="card">
                  <NavLink to="/product-details">
                    <img
                      src="https://picsum.photos/200/300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <h5>The Codes and Conventions of TV Serial Dramas</h5>
                      </div>
                      <div class="lower-text">
                        <div class="card-price">
                          <p> Rs.13,000</p>
                        </div>
                        <div class="card-space">
                          <div class="card-age">
                            <p>Brand New</p>
                          </div>
                          <div class="card-seen">
                            <img src={eye} alt=".seen" />
                            <p>20000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div class="card">
                  <NavLink to="/product-details">
                    <img
                      src="https://picsum.photos/200/300"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <div class="card-title">
                        <h5>The Codes and Conventions of TV Serial Dramas</h5>
                      </div>
                      <div class="lower-text">
                        <div class="card-price">
                          <p> Rs.13,000</p>
                        </div>
                        <div class="card-space">
                          <div class="card-age">
                            <p>Brand New</p>
                          </div>
                          <div class="card-seen">
                            <img src={eye} alt=".seen" />
                            <p>20000000</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>

                <div class="page-container">
                  <div class="page-box">
                    <button class="">1</button>
                    <button class="">2</button>
                    <button class="">3</button>
                  </div>

                  <div class="page-next">
                    <button class="">Next</button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </MediaQuery>
    </>
  );
};

export default Sort;
