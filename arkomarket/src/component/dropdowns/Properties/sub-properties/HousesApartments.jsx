import React from "react";
import NavBar from "../../../nav";
import Simple from "../../Simple";
import "../../../../css/simple.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../../../scss/dropdown.scss";
import "../../../../scss/filter.scss";
import Push from "../../../../Asset/push.svg";
import { Container,Breadcrumb } from "react-bootstrap";
import {
  LocationComponent,
  PriceRange,
  HouseApartmentType,
  Bedrooms,
  Bathrooms,
  StatusProperties,
  FurnishingComponent,
  PropertiesOwnerType,
  PricePerSquare
} from "../../DropdownComponents";

const HouseApartments = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Breadcrumb className="breadCrumb-for-pages">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/properties/?active-nav=properties">Properties</Breadcrumb.Item>
          <Breadcrumb.Item active>House & Apartments</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container className="Conrainer-for-filter-sec">
        <div className="testing">
        <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Type <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <HouseApartmentType />
              </Dropdown.Menu>
            </Dropdown>
          </div>
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
                Bedrooms <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
               <Bedrooms />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Bathrooms <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Bathrooms />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Furnishing <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <FurnishingComponent />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Price per Sq. ft. <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <PricePerSquare/>
                
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {" "}
                Status <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <StatusProperties />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Owner Type <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <PropertiesOwnerType />
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

export default HouseApartments;
