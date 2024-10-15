import React from "react";
import { Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      AdminDashboard... this will have the Left side menu with add,update,delete products
      <Outlet />
    </div>
  );
}

export default AdminDashboard;