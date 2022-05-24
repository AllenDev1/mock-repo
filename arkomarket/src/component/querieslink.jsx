import React from "react";
import { Container } from "react-bootstrap";
import "../scss/querieslink.scss";
import { Link } from "react-router-dom";
const Querieslink = () => {
  return (
    <div className="main-link-head">
      <div className="link-heads">
        <a href="buyers">Buyer's FAQs</a>
        <a href="#">Seller's FAQs</a>
        <a href="#">General Queries</a>
        <a href="#">Trust and Saftey</a>
        <a href="#">Privacy</a>
        <a href="#">Terms of use</a>
        <a href="#">Community Terms</a>
      </div>
    </div>
  );
};

export default Querieslink;
