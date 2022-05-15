import React from 'react';
import "../css/sort.css";

const Sort = () => {
  return (
    <div className="sort-container">
      <div className="top-section">
          <div className="filter-buttons">
              <button className="Sale"></button>
              <button className="Exchange"></button>
              <button className="Required"></button>
      </div>
      <div className="sort-section">
      <select className="Sort">
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
      </div>

    </div>
    </div>
  )
}

export default Sort
