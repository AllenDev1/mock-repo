import React, { useRef } from "react";
import "../scss/editprofile.scss";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import { NavLink } from "react-bootstrap";
import { useState } from "react";
const Editprofile = () => {
  const [value, setValue] = useState();
  const inputFile = useRef(null);
  const handleFileUpload = (e) => {
    inputFile.current.click();
  };

  return (
    <>
      <div className="basic-info">
        <div style={{ borderBottom: "0.5px solid rgba(0, 0, 0, 0.15)" }}>
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
              <label htmlFor="Phone Number" className="phone-number-lebel">Email Address</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                defaultCountry="NP"
                international
                // withCountryCallingCode
                error={value && isPossiblePhoneNumber(value) ? "true" : "false"}
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

        <div className="profile-picture-edit">
          <h4>Profile Picture </h4>
          <div className="profile-picture-edit-sec">
            <div className="profile-pricute-image">
              <img
                src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="upload-remove-sec">
              <input
                ref={inputFile}
                id="file"
                type="file"
                style={{ display: "none" }}
                multiple="{false}"
              />

              <button onClick={handleFileUpload}>
                Upload
              </button>

              <NavLink href="#">Remove</NavLink>
            </div>
            <div className="upload-from-sol-med">
              <button>Upload from facebook</button>
              <button>Upload from Google</button>
            </div>
          </div>
          <div className="save-discard-changes">
            <button>Save Changes</button>
            <NavLink href="#">Discard</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editprofile;
