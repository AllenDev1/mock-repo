import React from 'react'
import "..css/filter.css"

const Filter = () => {
  return (
    <div className="filter-container">
        <div className="filter-display">
        <div className="clear"></div>
        <div className="filter-boxes"></div>
        <button className="filter-search">Search</button>
    </div>
    </div>
  );
};

export default Filter;