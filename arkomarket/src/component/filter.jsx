import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "../css/filter.css";
import "../scss/filter.scss";
import Arrow from "../Asset/push.svg";
import Simple from "./Simple";
const Filter = () => {
  return (
    <Container className="filter-main-div ">
      <div className="filter-container">
        <div className="filter-boxes">
          <div class="flex-container">
            <Simple />
          </div>
          <div className="clear-all">
            <a class="clear" href="#">
              Reset all
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
