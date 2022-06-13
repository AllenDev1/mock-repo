import React, { useState } from "react";
import "../../../../css/simple.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../../../scss/filter.scss";
import Push from "../../../../Asset/push.svg";
import NavBar from "../../../nav";
import Simple from "../../Simple";
import { Container,Breadcrumb } from "react-bootstrap";
import {
  LocationComponent,
  PriceRange,
  Condition,
  OwnerType,
  MobileBrands
} from "../../DropdownComponents";
const Tablets = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Breadcrumb className="breadCrumb-for-pages">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/mobile/?active-nav=mobile">Accessories</Breadcrumb.Item>
          <Breadcrumb.Item active>Tablets</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container className="Conrainer-for-filter-sec">
        <div className="testing">
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Location <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <LocationComponent />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Price Range <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <PriceRange />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Brand <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
               <MobileBrands />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Condition <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Condition/>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Owner Type 
                <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
               <OwnerType/>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="clear-all-btn">
            <button class="clear" href="#">
              Reset all
            </button>
          </div>
      </Container>
      <Simple />
    </>
  );
};

export default Tablets;
