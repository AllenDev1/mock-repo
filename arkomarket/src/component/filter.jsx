import React from "react";
import { Container } from "react-bootstrap";
import "../css/filter.css";

const Filter = () => {
  return (
    <Container className="mt-5">
      <div className="filter-container">
        <div className="filter-display">
         <div className="filter-carry" >
             <div className="filter-flex"><p>Filter</p></div>
                         
        <div className="clear"><a href="#">clear all</a></div>
        </div>  
        <div className="filter-boxes">
        <select
              className="Condition"
              name="find">
              <option>
                Condition
              </option>
              <option value="Instagram">Instagram</option>
              <option value="FaceBook">FaceBook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Articles">Articles</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Others">Others</option>
            </select>
            <select className="Gurantee" name="find">
              <option value selected>
                Gurantee
              </option>
              <option value="Instagram">Instagram</option>
              <option value="FaceBook">FaceBook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Articles">Articles</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Others">Others</option>
            </select>
            <select className="State" name="find">
              <option value selected>
                State
              </option>
              <option value="Instagram">Instagram</option>
              <option value="FaceBook">FaceBook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Articles">Articles</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Others">Others</option>
            </select>

            <input
              className="city"
              type="text"
              name="city"
              placeholder="City"
            />
            <input
              className="Price-from"
              type="text"
              name="text"
              placeholder="Price From"
            />

            <select className="Year-from" name="from">
              <option value selected>
                Year-from
              </option>
              <option value="Instagram">Instagram</option>
              <option value="FaceBook">FaceBook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Articles">Articles</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Others">Others</option>
            </select>
            <select className="Year-to" name="to">
              <option value selected>
                Year To
              </option>
              <option value="Instagram">Instagram</option>
              <option value="FaceBook">FaceBook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Articles">Articles</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Others">Others</option>
            </select>

           
            <input
              className="Kilometer-from"
              type="text"
              name="LName"
              placeholder="Kilometer From"
            />
            <input
              className="Kilometer-to"
              type="text"
              name="LName"
              placeholder="Kilometer To"
            />
             <input
              className="price-to"
              type="text"
              name="Price To"
              placeholder="Price To"
            />
          </div>
          <button className="filter-search">Search</button>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
