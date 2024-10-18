import React from "react";
import "./../addProduct/addProduct.scss";
import { Input, Form, Button, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";

function AddProduct() {
  return (
    <div className="col-sm-12 p-0">
      <div className="col-sm-12 p-0 text-center">
        <h1 className=""> Add New Product </h1>
      </div>
      <div className="col-sm-11 m-auto p-0">
        <Form>
          <FormGroup>
            <Label>
              <h5>
                <b>Product Name</b>
              </h5>
            </Label>
            <Input placeholder="Enter Product Name" type={"text"}></Input>
          </FormGroup>

          <FormGroup>
            <Label>
              <h5>
                <b>Product Description</b>
              </h5>
            </Label>
            <JoditEditor />
          </FormGroup>

          <FormGroup>
            <Label>
              <h5>
                <b>Product Price</b>
              </h5>
            </Label>
            <Input placeholder="Enter Product Price" type={"number"}></Input>
          </FormGroup>

          <FormGroup>
            <Label>
              <h5>
                <b>Product Quantity</b>
              </h5>
            </Label>
            <Input placeholder="Enter Product Quantity" type={"number"}></Input>
          </FormGroup>

          <FormGroup>
            <Label>
              <h5>
                <b>Product Category</b>
              </h5>
            </Label>
            <Input placeholder="Enter Product Category" className="" type="select">
              <option value="" disabled>
                Select a category
              </option>
              <option value="Laptop">Laptop</option>
              <option value="PC">PC</option>
              <option value="Mouse">Mouse</option>
              <option value="Headphone">Headphone</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <div className="col-sm-12 p-0 row m-0 justify-content-around">
              <Button type="submit" className="w-25 add-pro-btn">
                Add Product
              </Button>
              <Link to="/admin-dashboard/home" className="p-0 w-25">
                <Button type="submit" className="w-100 cancel-btn">
                  Cancel
                </Button>
              </Link>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default AddProduct;