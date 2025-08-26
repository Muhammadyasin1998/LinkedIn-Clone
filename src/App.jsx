import React from "react";
import "./App.css";
import Header from "./header.jsx";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";

function App() {
  return (
    <div className="app">
   

      {/* Header  */}
      <Header />

      {/* App Body  */}
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
