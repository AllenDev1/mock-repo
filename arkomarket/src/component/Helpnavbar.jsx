import React from "react";
import { Container } from "react-bootstrap";
import Help from "../Asset/help.svg";
import "../scss/helpnav.scss";
import "../scss/style.scss"

const Helpnav = () => {
  return (
    <Container>
      <div main-cont className="help-nav-fix">
        <div className="help-nav">
          <div className="help-logo ">
            <img src={Help} />
          </div>

          <div className="help-button">
            <div className="go-to-arkomarket">
              <a href="/">Go to ArkoMarket</a>
            </div>
            <button>Post Free Ads</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Helpnav;
