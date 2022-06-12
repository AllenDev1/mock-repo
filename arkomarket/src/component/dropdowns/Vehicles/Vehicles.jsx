import React, {useEffect} from "react";
import "../../../css/simple.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../../scss/dropdown.scss";
import "../../../scss/filter.scss";
import Push from "../../../Asset/push.svg";
import { Container } from "react-bootstrap";
import Simple from "../Simple";
import NavBar from "../../nav";
import {
  LocationComponent,
  Condition,
  PriceRange,
  FuelType,
  GearType,
  ManufactureYear,
  KMDriven,
  OwnerType,
} from "../DropdownComponents.jsx";
import $ from "jquery";



const Vehicles = () => {
  $(".mdb-select").on("click", (e) => {
    e.stopPropagation();
  });
  
  
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
                <LocationComponent /> {/* location component dropdown  */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Price Range <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <PriceRange /> {/* Price range component dropdown  */}
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

export default Vehicles;
