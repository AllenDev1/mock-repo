import React from "react";
import { Container,Form } from "react-bootstrap";
import "../css/filter.css";
import Fil from "../Asset/filter.svg";
import Pull from "../Asset/pull.svg";

const Filter = () => {
  return (
    <Container className="mt-5">
      <div className="filter-container">
        <div className="filter-display">
         <div className="filter-carry" >
             <div className="filter-flex">
               <img className="fill" src={Fil}/>
               <p>Filters</p>
               <img className="Pull" src={Pull}/></div>
                         
        <div className="clear"><a href="#">clear all</a></div>
        </div>  
        <div className="filter-boxes">
        <Form.Select aria-label="Default select ">
                  <option> Condition </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select ">
                  <option> Gurantee </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select ">
                  <option> State </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

            <input
              className="city"
              type="text"
              name="city"
              placeholder="City"
            />
            <input
              className="Price-from"
              type="text"
              name="text"
              placeholder="Price From"
            />

<Form.Select aria-label="Default select ">
                  <option> Kilometer From </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Select aria-label="Default select ">
                  <option> Kilometer To </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

           
            <input
              className="Kilometer-from"
              type="text"
              name="LName"
              placeholder="Kilometer From"
            />
            <input
              className="Kilometer-to"
              type="text"
              name="LName"
              placeholder="Kilometer To"
            />
             <input
              className="price-to"
              type="text"
              name="Price To"
              placeholder="Price To"
            />
          </div>
          <button className="filter-search">Search</button>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
