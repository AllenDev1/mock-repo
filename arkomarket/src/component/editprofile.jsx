import React from "react";
import "../scss/editprofile.scss";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
const Editprofile = () => {
  const [value, setValue] = useState();
  return (
    <>
      <div className="basic-info">
        <div className="basic-info-form">
          <h4>Basic Information</h4>
          <form>
            <div className="form-row">
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
                <label htmlFor="inputPassword4">Last Name</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="example@example.com"
              />
            </div>
            <label htmlFor="Phone Number">Email Address</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry="Nepal"
              international
              withCountryCallingCode
            />
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">About</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
