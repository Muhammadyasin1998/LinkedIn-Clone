import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Sidebar.css";
import BgProfile from "./assets/bg_profile.jpg";
function Sidebar() {
    const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={BgProfile} alt="" />
        <AccountCircleIcon className="sidebar_avatar" />
        <h2>John Doe</h2>
        <h4>khan@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statNumber">321</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">321</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
