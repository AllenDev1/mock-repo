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
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PostNewAds;
