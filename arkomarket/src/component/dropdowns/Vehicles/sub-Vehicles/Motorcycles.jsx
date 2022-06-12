import React, { useState } from "react";
import "../../../../css/simple.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../../../scss/dropdown.scss";
import "../../../../scss/filter.scss";
import Push from "../../../../Asset/push.svg";
import { Container } from "react-bootstrap";
import Simple from "../../Simple";
import NavBar from "../../../nav";
import {
  LocationComponent,
  PriceRange,
  Condition,
  ManufactureYear,
  KMDriven,
  MotercycleBrand,
  OwnerType
} from "../../DropdownComponents";
const Motorcycles = () => {
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
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Brand <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
               <MotercycleBrand />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Condition <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Condition /> {/* Conditioncomponent dropdown  */}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Manufacture Year <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <ManufactureYear /> {/** ManufactureYear dropdown */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                KM Driven <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <KMDriven /> {/** KM driven dropdown */}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              Owner Type <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <OwnerType /> {/** OwnerType dropdown */}
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

export default Motorcycles;
