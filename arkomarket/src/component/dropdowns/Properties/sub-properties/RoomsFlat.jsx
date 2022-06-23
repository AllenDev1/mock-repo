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
  RoomsFlatTypes,
  Kitchen,
  Bathrooms,
  FurnishingComponent,
  StatusProperties,
  PropertiesOwnerType,
} from "../../DropdownComponents";
const RoomsFlat = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Breadcrumb className="breadCrumb-for-pages">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/properties/?active-nav=properties">Properties</Breadcrumb.Item>
          <Breadcrumb.Item active>Rooms & Flat</Breadcrumb.Item>
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
                <RoomsFlatTypes />
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
                No. of Rooms <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Bathrooms />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {" "}
                Kitchen <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Kitchen />
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

export default RoomsFlat;
