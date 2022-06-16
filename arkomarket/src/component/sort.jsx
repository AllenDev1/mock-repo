import React from "react";
import { Container, Form, Dropdown } from "react-bootstrap";
import "../css/sort.css";
import "../scss/sort.scss";
import eye from "../Asset/eye.svg";
import { NavLink } from "react-router-dom";
import "../scss/responsive scss/v2Sort.scss"
import MediaQuery from "react-responsive";
import Push from "../Asset/library2/Vector.svg";

const Sort = () => {
  return (
    <>
      <MediaQuery minWidth={800}>
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
      <MediaQuery maxWidth={599}>
        <Container className="">
          <div className="sort-container ">
            <Container>
              <div className="top-section v2-sale-dropdown">
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
