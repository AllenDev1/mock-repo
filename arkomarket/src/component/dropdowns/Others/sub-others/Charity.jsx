import React, { useState } from "react";
import "../../../../css/simple.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../../../../scss/filter.scss";
import Push from "../../../../Asset/push.svg";
import NavBar from "../../../nav";
import Simple from "../../Simple";
import { Container, Breadcrumb } from "react-bootstrap";
import {
  LocationComponent,
  CharityBy,
} from "../../DropdownComponents";
const Charity = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Breadcrumb className="breadCrumb-for-pages">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/others/?active-nav=others">Others</Breadcrumb.Item>
          <Breadcrumb.Item active>Charity</Breadcrumb.Item>
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
                Charity By
                <img src={Push} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <CharityBy />
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

export default Charity;
