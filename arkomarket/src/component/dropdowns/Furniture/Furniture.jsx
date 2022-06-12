import React, { useState } from "react";
import "../../../css/simple.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../../scss/filter.scss";
import Push from "../../../Asset/push.svg";
import NavBar from "../../nav";
import Simple from "../Simple";
import { Container } from "react-bootstrap";
import {
  LocationComponent,
  PriceRange,
  Condition,
  OwnerType,
} from "../DropdownComponents";
const Furniture = () => {
  return (
    <>
      <NavBar />
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
              Condition <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Condition />
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

export default Furniture;
