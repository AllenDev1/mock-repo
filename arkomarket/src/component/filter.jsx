import React from "react";
import { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/filter.css";
import "../scss/filter.scss";
import Arrow from "../Asset/push.svg";
const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  function myFunction(e) {
    document.getElementById("myDropdown").classList.toggle("show");
    // setIsOpen(true);
  }
  window.onclick = function (e) {
    if (isOpen === true) {
      document.getElementById("myDropdown").classList.toggle("show");
      console.log("helo");
    }

    // console.log("find me on click");
  };

  // console.log(isOpen);
  return (
    <Container className="filter-main-div mt-3">
      <div className="filter-container">
        <div className="filter-boxes">
          <div class="flex-container">
            <button onClick={myFunction} class="dropdown-button" type="button">
              Brand <img src={Arrow} alt="" srcSet="" />
            </button>
            <ul id="myDropdown" className="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <button href="#">JavaScript</button>
              </li>
            </ul>

            <button class="dropdown-button">
              Fuel Type <img src={Arrow} alt="" srcSet="" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
            <button class="dropdown-button">
              Gear Type <img src={Arrow} alt="" srcSet="" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
            <button class="dropdown-button">
              Kilometers <img src={Arrow} alt="" srcSet="" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
            <button class="dropdown-button">
              Condition <img src={Arrow} alt="" srcSet="" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
            <button class="dropdown-button">
              Price <img src={Arrow} alt="" srcSet="" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
            <button class="dropdown-button">
              Location <img src={Arrow} alt="" srcSet="" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
            <button class="dropdown-button">
              Manufacture Year <img src={Arrow} alt="" srcSet="" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
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
