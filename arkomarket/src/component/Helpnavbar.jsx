import React from 'react';
import {Container} from "react-bootstrap";
import Help from "../Asset/Arko-help.svg";
import "../css/helpnav.css";

 const Helpnav = () => {
  return (
    <div main-cont>
        
    <Container>
        <div className="help-nav">
            <div className="help-logo">
                <img src={Help}/>
                
            </div>
            <div className="help-button">
                <button>Post Free Ads</button>
            </div>
        </div>


    </Container>

    </div>
  )
}
export default Helpnav;
