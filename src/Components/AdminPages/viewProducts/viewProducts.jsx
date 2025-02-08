import React, { useEffect, useState } from "react";
import {Input,FormGroup,Table, Button , Pagination, PaginationItem, PaginationLink} from "reactstrap"
import "../viewProducts/viewProducts.scss"
import { fetchProducts } from "../../../Services/productService";

function ViewProducts() {

  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    const getProducts = 
      async() =>{
        try {
          const data = await fetchProducts();
          setProducts(data);
        } catch (error) {
          console.log("Error fetching Products")          
        }
      };
      getProducts();
    }, []);


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
              <th>Category</th>
              <th>Quantity</th>
              <th>View Product</th>
              <th>Update Product</th>
              <th>Delete Product</th>
            </tr>
          </thead>

          <tbody>
            { products.map( (product)=> (
           
            <tr>
              <td> {product.product_id} </td>
              <td> {product.product_name}</td>
              <td>{product.product_price}</td>
              <td> {product.category?.categoryName || "No Category"} </td>
              <td> {product.product_quantity}</td>
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
             )
            ) }
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
