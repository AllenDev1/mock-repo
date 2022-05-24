import React from "react";
import { Container, Form } from "react-bootstrap";
import "../css/filter.css";
import "../scss/filter.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {  } from '@fortawesome/free-solid-svg-icons';
import Arrow from "../Asset/push.svg";

const Filter = () => {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-button")) {
      var dropdowns = document.getElementsByClassName("dropdown-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
    return false;
  };
  return (
    <Container className="filter-main-div mt-3">
      <div className="filter-container">
        <div className="filter-display">
          <div className="filter-boxes">
            <div class="dropdown">
              <div class="flex-container">
                <button onClick={myFunction} class="dropdown-button">
                  Brand <i class="fa-solid fa-chevron-down"></i>
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
                  Fuel Type <img src={Arrow} />
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
                  Gear Type <img src={Arrow} />
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
                  Kilometers <img src={Arrow} />
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
                  Condition <img src={Arrow} />
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
                  Price <img src={Arrow} />
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
                  Location <img src={Arrow} />
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
                  Price <img src={Arrow} />
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

                <a class="clear" href="#">
                  Reset all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
