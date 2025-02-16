import React, { useEffect, useState } from "react";
import {Input,FormGroup,Table, Button , Pagination, PaginationItem, PaginationLink, Modal,ModalHeader,ModalBody,Card,CardBody,CardText,ModalFooter} from "reactstrap"
import "../viewProducts/viewProducts.scss"
import { fetchProducts,loadSingleProduct,updateProduct } from "../../../Services/productService";
import { toast } from "react-toastify";

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

  // Update Product modal
  const[updateModal, setUpdateModal] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    // product_id:"",
    product_name : "",
    product_desc: "",
    product_price: "",
    product_quantity: ""
  });

  const openUpdateModal = (product_id)=>{
    setUpdateModal(true);
    loadSingleProduct(product_id)
    .then((data)=>{

      setUpdatedProduct({
        product_id: data.product_id || "",  
        product_name: data.product_name || "", 
        product_desc: data.product_desc || "",  
        product_price: data.product_price || 0.0,  
        product_quantity: data.product_quantity || 0,  
        product_imageName: data.product_imageName || "", 
        category: data.category || {}, 
      });
      setUpdateModal(true); 
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  const closeUpdateModal = ()=>{
    setUpdateModal(false);
  }

    const updateProductModal = () => {
      return (
        <Modal isOpen={updateModal} toggle={closeUpdateModal} size="lg">
          <ModalHeader toggle={closeUpdateModal}>Update Product</ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Product Name</label>
              <Input
                type="text"
                value={updatedProduct.product_name || ""}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    product_name: e.target.value,
                  })
                }
              />
            </FormGroup>

            <FormGroup>
              <label>Product Description</label>
              <Input
                type="text"
                value={updatedProduct.product_desc || ""}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    product_desc: e.target.value,
                  })
                }
              />
            </FormGroup>

            <FormGroup>
              <label>Product Price</label>
              <Input
                type="number"
                value={updatedProduct.product_price || 0.0}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    product_price: parseFloat(e.target.value) || 0,
                  })
                }
              />
            </FormGroup>

            <FormGroup>
              <label>Product Quantity</label>
              <Input
                type="number"
                value={updatedProduct.product_quantity || 0}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    product_quantity: parseInt(e.target.value, 10) || 0,
                  })
                }
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>
              Save Changes
            </Button>
            <Button color="secondary" onClick={closeUpdateModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      );
    };
    
    const handleUpdate = () => {
      if (!updatedProduct.product_id) {
        console.error("Product ID is missing.");
        toast.error("Product ID is missing.");
        return;
      }
    
      console.log("Updating product with ID:", updatedProduct.product_id);
    
      updateProduct(updatedProduct.product_id, {
        product_name: updatedProduct.product_name,
        product_desc: updatedProduct.product_desc, 
        product_price: updatedProduct.product_price, 
        product_quantity: updatedProduct.product_quantity, 
      })
        .then(() => {
          toast.success("Product updated successfully!");
          closeUpdateModal();
          fetchProducts()
            .then((data) => {
              setProducts(data);
            })
            .catch((error) => {
              console.error(error);
              toast.error("Failed to refresh product list.");
            });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to update product.");
        });
    };
    
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
                <Button color="info" size="sm" onClick={() => openUpdateModal(product.product_id)}>
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
      {updateModal && updateProductModal()}

    </div>
  );
}

export default ViewProducts;
