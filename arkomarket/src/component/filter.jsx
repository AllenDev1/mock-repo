<<<<<<< Updated upstream
import React from 'react'
import "../css/filter.css"

const Filter = () => {
  return (
    <div className="filter-container">
        <div className="filter-display">
         <div className="filter-carry" >
             <div className="filter-flex"><p>Filter</p></div>
                         
        <div className="clear"><p>clear</p></div>
        </div>  
        <div className="filter-boxes">
        <select
              className="Condition"
              name="find"
             
            >
              <option value selected>
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
            <select
              className="Gurantee"
              name="find"
             
            >
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
            <select
              className="State"
              name="find"
             
            >
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
              name=""
              placeholder="Price From"
            />
           
            <select
              className="Year-from"
              name="from"
             
            >
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
            <select
              className="Year-to"
              name="to"
             
            >
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
              className="price-to"
              type="text"
              name="Price To"
              placeholder="Price To"
            />
             <input
          
              className="fd"
              type="text"
              name="LName"
              placeholder="Last Name"
            />
             <input
            
              className="fd"
              type="text"
              name="LName"
              placeholder="Last Name"
            />

        </div>
        <button className="filter-search">Search</button>
    </div>
    </div>
  );
};

export default Filter;
=======
>>>>>>> Stashed changes
