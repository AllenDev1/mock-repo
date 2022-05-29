import React from 'react';
import "../scss/helpform.scss";
import Logo from "../Asset/Arko-help.svg";
import Cross from "../Asset/Cross.svg";
import { Form } from "react-bootstrap";



const Helpform = () => {
  return (
    <div className="helpform-content">
        <div className="top-logo-help">
          <div className="top-help">
            <img className="Logo" src={Logo}/>
            <img className="cross" src={Cross}/>
          </div>
          <p>Write us your inquires and we shall try to be responsive as soon as possible.</p>

        </div>
    
                <div className="form-group ">
                  <label htmlFor="inputEmail4">First Name</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="input">Last Name</label>
                  <input
                    
                    className="form-control"
          
                    placeholder="Last Name"
                  />
                </div>
                <Form.Select aria-label="Default select ">
                <label>Last Name</label>
                  <option> Sort By </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>

                <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">About</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Please Write us"
                />
              </div>
              <div className="send-us">
            <button>Send Us</button>
          </div>
              
    </div>
  )
}

export default Helpform;