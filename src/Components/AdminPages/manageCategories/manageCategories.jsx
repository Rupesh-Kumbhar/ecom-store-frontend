import React from "react";
import { Button, Table } from "reactstrap";

function ManageCategories(){
    return (
      <div className="col-sm-12 p-0">
        <div className="col-sm-11 m-auto p-0">
          <h1 className="text-center">Manage Categories</h1>
          <Table bordered response hover className="text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>
                        <Button size="sm" color="danger" >Delete</Button>
                    </td>
                </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
}

export default ManageCategories;