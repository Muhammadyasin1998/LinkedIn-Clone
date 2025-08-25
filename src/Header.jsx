import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "./assets/linkedin.png";

function header() {
  return (
    <div className="header">

      <div className="header_left">
        <img src={LinkedInIcon} alt="" />
        <div className="header_search">
          {/* Search Icon  */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header_right"></div>
    </div>
  );
}

export default header;
