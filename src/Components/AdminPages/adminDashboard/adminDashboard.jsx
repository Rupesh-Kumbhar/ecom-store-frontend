import React from "react";
import { Outlet,Link } from "react-router-dom";
import { ListGroup, ListGroupItem} from 'reactstrap'

function AdminDashboard() {
  return (
    <div className="col-sm-12 p-0 row m-0">
      <div className="col-sm-3 p-0 mt-5">
        <ListGroup className="text-center">
          <ListGroupItem
            className="py-3"
            tag={Link}
            to={"/admin-dashboard/home"}
            action="true"
          >
            <h5 className="admin-nav-font"> Home</h5>
          </ListGroupItem>

          <ListGroupItem
            className="py-3"
            tag={Link}
            to={"/admin-dashboard/add-product"}
            action="true"
          >
            <h5 className="admin-nav-font">Add Product</h5>
          </ListGroupItem>
        </ListGroup>
      </div>
      <div className="col-sm-9 p-0 text-center ">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;


