import React from "react";
import { Container, Form } from "react-bootstrap";
import "../css/filter.css";
import Fil from "../Asset/filter.svg";
import Pull from "../Asset/pull.svg";

const Filter = () => {
  return (
    <Container className="filter-main-div mt-3">
      <div className="filter-container">
        <div className="filter-display">
          <div className="filter-boxes">
            <Form.Select aria-label="Default select ">
              <option> Brand </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select ">
              <option> Fuel Type </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select ">
              <option> Gear Type </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Select aria-label="Default select ">
              <option> Manifacture Year </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select ">
              <option> Kilometer</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select ">
              <option>Condition</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select ">
              <option>Location</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select aria-label="Default select ">
              <option>Price</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <div className="clear">
              <a href="#">Reset all</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
