import React from "react";
import { Container } from "react-bootstrap";
import Help from "../Asset/Arko-help.svg";
import "../scss/helpnav.scss";

const Helpnav = () => {
  return (
    <div main-cont>
      <div className="help-nav">
        <div className="help-logo ">
          <img src={Help}  />
        </div>
        <div className="help-button">
          <button>Post Free Ads</button>
        </div>
      </div>
    </div>
  );
};
export default Helpnav;
