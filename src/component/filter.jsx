import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "../css/filter.css";
import "../scss/filter.scss";
import Arrow from "../Asset/push.svg";
import Simple from "./Simple";
const Filter = () => {
  // window.onclick = function (e) {
  //   if (isOpen === true) {
  //     document.getElementById("myDropdown").classList.toggle("show");
  //     console.log("helo");
  //   }

  //   // console.log("find me on click");
  // };

  // console.log(isOpen);
  const [isOpen, setIsOpen] = useState(false);
  function myFunction(e) {
    document.getElementById("myDropdown").classList.toggle("show");
    setIsOpen(true);
  }

  return (
    <Container className="filter-main-div mt-3">
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
