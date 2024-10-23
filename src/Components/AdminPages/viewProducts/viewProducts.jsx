import React from "react";
import {Input,FormGroup,Table, Button , Pagination, PaginationItem, PaginationLink} from "reactstrap"
import "../viewProducts/viewProducts.scss"

function ViewProducts() {
  return (
    <div className="col-sm-12 p-0">
      <div className="col-sm-11 m-auto p-0">
        
        <h1 className="text-center m-0 my-3">View All Products</h1>

        <FormGroup>
          <Input className="w-50 m-auto" type="text" placeholder="Search Product" ></Input>
        </FormGroup>

        <Table bordered responsive hover className={"bg-white text-center"}>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>View Product</th>
              <th>Update Product</th>
              <th>Delete Product</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>productId</td>
              <td>productName</td>
              {/* if use <td>productNamefggergeegrgergergergerg</td> Here handle length in CSS , 
                    if it increasing in length...its affecting the width of other column */}
              <td>productPrice</td>
              <td>stock </td>
              <td>category title</td>
              <td>productQuantity</td>
              <td>
                <Button className="view-pro-btn" size="sm">
                  View
                </Button>
              </td>
              <td>
                <Button className="update-pro-btn" size="sm">
                  Update
                </Button>
              </td>
              <td>
                <Button className="delete-btn" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="col-sm-12 p-0 ">
          <Pagination >
            <PaginationItem disabled>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

export default ViewProducts;
