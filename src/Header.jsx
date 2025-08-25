import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "./assets/linkedin.png";
import ProfileIcon from "./assets/profile.jpeg";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderOptions from "./HeaderOptions";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={LinkedInIcon} alt="LinkedIn" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions title="Home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOptions title="Messaging" Icon={ChatIcon} />
        <HeaderOptions title="Notifications" Icon={NotificationsIcon} />
        <HeaderOptions avatar={ProfileIcon} title="Me" />
      </div>
    </div>
  );
}

export default Header;
