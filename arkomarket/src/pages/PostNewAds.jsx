import React from "react";
import { Container, Form } from "react-bootstrap";
import "../scss/postnewads.scss";
import { useState, useRef } from "react";
import photo from "../Asset/Addphoto.svg";

const PostNewAds = () => {
  const [value, setValue] = useState();
  const inputFile = useRef(null);
  const handleFileUpload = (e) => {
    inputFile.current.click();
  };

  return (
    <>
      <Container>
        <div className="post-new-add-container">
          <h3>POST YOUR AD</h3>

          <div className="choose-category">
            <h3>Choose Category</h3>
            <div className="category-sec">
              <div className="form-group">
                <label htmlFor="selectCat">Category*</label>
                <Form.Select aria-label="Default select ">
                  <option> select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="form-group">
                <label htmlFor="selectCat">Sub Category*</label>
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
              <label htmlFor="selectCat">Condition*</label>
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
            <label htmlFor="selectCat">Sub Category*</label>
            <div className="hold-photos">
              <input
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

              <input
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

              <input
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

              <input
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

              <input
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

              <input
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

              <input
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

              <input
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

              <input
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

              <input
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

              <input
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

              <input
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

              <input
                ref={inputFile}
                id="file"
                type="file"
                style={{ display: "none" }}
                multiple="{false}"
              />
              <div className="Title-discription">
                <h3>Title and Description</h3>
                <div className="title-discription-holder">
                  <div className="title-class">
                    <label htmlFor="selectCat">Ad Title*</label>
                    <input
                      className="title-sup"
                      type="text"
                      name="LName"
                      placeholder="Title"
                    />
                  </div>
                  <div className="discription-class">
                    <label htmlFor="selectCat">Ad Discription*</label>

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
              <div className="add-price">
                <h3>Add Price</h3>
                  <div className="add-pri">
                    <label htmlFor="selectCat">Price*</label>
                    <input
                      className="Price-add"
                      type="text"
                      name="LName"
                      placeholder="0"
                    />
          </div>
        </div>
        <div className="provide-location">
                <h3>Provide Location</h3>
                  <div className="add-state">
                    <label htmlFor="selectst">State*</label>
                    <Form.Select aria-label="Default select ">
                  <option> select </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
          </div>
          <div className="add-city">
                    <label htmlFor="selecci">City*</label>
                    <input
                      className="add-city"
                      type="text"
                      name="LName"
                      placeholder="City"
                    />
          </div>
          <button className="Post-but">Post Now</button>
        </div>
        </div>
        </div>
        </div>
      </Container>
    </>
  );
};

export default PostNewAds;
