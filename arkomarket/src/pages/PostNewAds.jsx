import React from "react";
import { Container, Form } from "react-bootstrap";
import "../scss/postnewads.scss";
import { useState, useRef } from "react";
import photo from "../Asset/Addphoto.svg";
import UserNav from "../component/user-nav";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Whatsapp from "../Asset/whatsapp.svg";
import viber from "../Asset/viber.svg";
const PostNewAds = () => {
  const [value, setValue] = useState();
  const inputFile = useRef(null);
  const handleFileUpload = (e) => {
    inputFile.current.click();
  };

  return (
    <>
      <UserNav />
      <Container>
        <div className="post-new-add-container">
          <h3>POST YOUR AD</h3>

          <div className="choose-category">
            <h3>Choose Category</h3>
            <div className="category-sec">
              <div className="form-group">
                <Form.Select aria-label="Default select ">
                  <option> select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="form-group">
                <Form.Select aria-label="Default select ">
                  <option> select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>
          <div className="basic-details">
            <h3>Provide basic details</h3>
            <div className="form-group">
              <Form.Select aria-label="Default select ">
                <option> select </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
          <div className="upload-photos">
            <h3>Upload upto 12 images</h3>
            <div className="hold-photos ">
              <input
                className="focus-propotities-for-input-tag"
                ref={inputFile}
                id="file"
                type="file"
                style={{ display: "none" }}
                multiple="{false}"
              />
              <button onClick={handleFileUpload}>
                <img src={photo} />
                <p>Add Photo</p>
              </button>
            </div>
            <div className="Title-discription">
              <h3>Title and Description</h3>
              <div className="title-discription-holder">
                <div className="title-class">
                  <input
                    className="title-sup focus-propotities-for-input-tag"
                    type="text"
                    name="LName"
                    placeholder="Title"
                  />
                </div>
                <div className="discription-class">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="addPrice-adLocation">
              <div className="add-price">
                <h3>Add Price</h3>
                <div className="add-pri">
                  <input
                    className="Price-add focus-propotities-for-input-tag"
                    type="text"
                    name="LName"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="provide-location">
                <h3>Provide Location</h3>
                <div className="add-state">
                  <Form.Select aria-label="Default select ">
                    <option> select </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
                <div className="add-city">
                  <input
                    className="add-city focus-propotities-for-input-tag"
                    type="text"
                    name="LName"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="check-contact-info">
            <h4>Check Contact Info</h4>
            <div className="check-contact-info-form">
              <div className="firstName-lastName">
                <input
                  type="text"
                  placeholder="First Name"
                  className="focus-propotities-for-input-tag"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="focus-propotities-for-input-tag"
                />
              </div>
              <input
                type="email address"
                placeholder="email address"
                className="focus-propotities-for-input-tag"
              />
              <PhoneInput
                country={"np"}
                value={value}
                placeholder="Enter phone number"
                onChange={setValue}
              />
            </div>
            <div className="link-message mt-4">
              <h5>Link App for Messages</h5>
              <div className="link-viber-whatsapp">
                <div className="Whatsapp-link">
                  <div className="whatsapp-contain">
                    <img src={Whatsapp} />
                    <p>Whatsapp</p>
                  </div>
                  <div className="whatsapp-button">
                    <button>Link</button>
                  </div>
                </div>

                <div className="viber-link">
                  <div className="viber-contain">
                    <img src={viber} />
                    <p>Viber</p>
                  </div>
                  <div className="viber-button">
                    <button>Link</button>
                  </div>
                </div>
              </div>
            </div>
            <Form.Group
              className=" check-box-policy mt-4"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" />{" "}
              <label htmlFor="check-box-policy">
                I’m accepting ArkoMarket <a href="http://"> Community Terms </a>
                and <a href="http://"> Privacy Policy. </a>
              </label>
            </Form.Group>
            <button className="Post-but">Post Now</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PostNewAds;
