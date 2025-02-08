import React, { useEffect, useState } from "react";
import {Input,FormGroup,Table, Button , Pagination, PaginationItem, PaginationLink, Modal,ModalHeader,ModalBody,Card,CardBody,CardText,ModalFooter} from "reactstrap"
import "../viewProducts/viewProducts.scss"
import { fetchProducts,loadSingleProduct } from "../../../Services/productService";

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

  // view product modal
  const [modal, setModal] = useState(false);
  const [clickProduct, setClickProduct] = useState(null);
  
    const openModal = (clickProductId) => {
      setModal(true);
      loadSingleProduct(clickProductId)    // viewProductById
        .then((data) => {
          setClickProduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const viewProductModal = () => {
      return (
        <Modal isOpen={modal} toggle={closeModal} size="lg" className="modal-dialog modal-dialog-centered">
          <ModalHeader toggle={closeModal} ></ModalHeader>
            {clickProduct && (
          <ModalBody className="row m-0">
            <div className="col-sm-8 ">
              
              <Card className="shadow-sm" color="light">
                <CardBody>
                  <CardText>
                    <h5>Product Id : {clickProduct.product_id}</h5>
                    <h5>Product Name : {clickProduct.product_name}</h5>
                    <h5>Product Price : {clickProduct.product_price}</h5>
                    <h5>Product Description : {clickProduct.product_desc}</h5>
                    <h5>Product Category : {clickProduct.category?.categoryName || "No Category"}</h5>
                  </CardText>
                </CardBody>
              </Card>

            </div>
            <div className="col-sm-4 product-img">
              <img src="#" alt="product img" />
              
            </div>
          </ModalBody>
            )}
          <ModalFooter>
            <Button className="modal-close-btn w-25" size="sm" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      );
    };

  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(false);

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
              <th>Product Desc</th>
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
              <td> {product.product_desc} </td>
              <td> {product.product_quantity}</td>
              <td>
                <Button color="primary" size="sm" onClick={() => openModal(product.product_id)}> 
                   View
                </Button>
              </td>
              <td>
                <Button color="info" size="sm">
                  Update
                </Button>
              </td>
              <td>
                <Button color="danger"  size="sm">
                  Delete
                </Button>
              </td>
            </tr>
             )
            ) }
          </tbody>
        </Table>

        <div className="col-sm-12 p-0 d-flex justify-content-end">
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

      {clickProduct && viewProductModal()}

    </div>
  );
}

export default ViewProducts;
