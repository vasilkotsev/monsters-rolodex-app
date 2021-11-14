import React from "react";
import "./search-box.styles.css";

const SearchBox = props => {
  return <input {...props} className="search" type="search" />;
};

export default SearchBox;
