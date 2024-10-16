import React from "react";
import "./../adminHome/adminHome.scss";
import { CardBody,Card,Button } from "reactstrap";

function AdminHome(){
    return(
        <div className="col-sm-12 p-0">
        <div className="col-sm-12 p-0 text-center my-4">
              <h1><b> Welcome to Admin Dashboard </b></h1>
        </div>
    
        <div className="col-sm-12 p-0 row m-0 admin-home-bg">
    
        <div className="col-sm-7 m-auto px-4">
          <h5>
              From here, you can manage all aspects of your site and view important metrics and analytics.
                Start adding the Products and managing the  order from here
          </h5>
          </div>
    
            <div className="col-sm-5 p-0">
                <img src="/assets/admin-images/admin_Home.png"
                    alt="Description of the image"
                    className="admin-img"
                />
            </div>
        </div>
        <div className="col-sm-12 p-0 mt-5 text-center">
              {/* <Button className="add-pro-admin-btn w-50" onClick={()=>{goAddProduct()}}>Add Product</Button> */}
              <Button className="add-pro-admin-btn w-50" >Add Product</Button>
        </div>
      </div>
    )
}
export default AdminHome;