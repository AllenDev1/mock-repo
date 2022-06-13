import React from "react";
import NavBar from "../../../nav";
import Simple from "../../Simple";
import "../../../../css/simple.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../../../scss/dropdown.scss";
import "../../../../scss/filter.scss";
import Push from "../../../../Asset/push.svg";
import { Container, Breadcrumb } from "react-bootstrap";
import {
  LocationComponent,
  PriceRange,
  GiftSelectOptions
} from "../../DropdownComponents";
const Gifts = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Breadcrumb className="breadCrumb-for-pages">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/family-needs/?active-nav=family-needs">Family Needs</Breadcrumb.Item>
          <Breadcrumb.Item active>Gifts</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container className="Conrainer-for-filter-sec">
        <div className="testing">
        <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select  Gift <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <GiftSelectOptions />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Location <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <LocationComponent/>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Price Range <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <PriceRange/>
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

export default Gifts;
