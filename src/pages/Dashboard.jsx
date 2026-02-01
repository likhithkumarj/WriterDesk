import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboradMain">
      <div className="tab-container">
        <NavLink to="ideas" className="tab">
          Ideas
        </NavLink>
        <NavLink to="posts" className="tab">
          Posts
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
