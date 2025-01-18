import React, { useState, useEffect } from "react";
import { Button, Table,FormGroup,Input } from "reactstrap";
import { fetchCategories } from "../../../Services/categoryService"; 
import { loadSingleCategory } from "../../../Services/categoryService";
import {CardText, CardBody,Card,Modal,ModalBody,ModalHeader,ModalFooter} from "reactstrap"


function ManageCategories(){

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modal, setModal] = useState(false);
  const[clickCategory,setClickCategory]=useState(null);
  const toggle = () => setModal(!modal);
  const closeModal=()=>{
    setModal(false)
  }
  const openModal=(clickCategoryId)=>{
    setModal(true)
    loadSingleCategory(clickCategoryId).then(data=>{
      setClickCategory(data)
    //console.log(clickCategory)
   }).catch(error=>{
    console.log(error)
   })
    //console.log(selectItem)
  //console.log(selectItem.item[0].product.productName)
  }
  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories(); // Use the service method
        setCategories(data); // Update state with fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error loading categories:", error);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }


  const modelHtml=()=>{
    return(
       
      <Modal isOpen={modal} toggle={closeModal} size="lg">
      <ModalHeader toggle={closeModal}>
        </ModalHeader>
      <ModalBody>
      { 
        
        <Card className=' shadow-sm'  color='light' >
            <CardBody className=''>
            <h5>Categoty Id : {clickCategory.categoryId}</h5>
              <CardText>
                <h5>Category Name : {clickCategory.categoryName}</h5>
              </CardText >
            </CardBody>
          </Card>
        
      }
        
      </ModalBody>
      <ModalFooter>
       
        <Button className="modal-close-btn w-25" size='sm' onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
    )
  }

  return (

    <div className="col-sm-12 p-0">
      <h1 className="text-center m-0 my-3">View All Categories</h1>
      <div className="col-sm-11 m-auto p-0">
        
        <FormGroup>
          <Input className="w-50 m-auto" type="text" placeholder="Search Categories" ></Input>
        </FormGroup>
        
        <Table bordered borderless responsive hover className="text-center bg-white" >
          <thead>
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>View Category</th>
              <th>Update Category</th>
              <th>Delete Category</th>
            </tr>
          </thead>

          <tbody >
          {categories.map((category) => (   
            <tr>
              <td>{category.categoryId} </td>
              <td>{category.categoryName} </td>
              <td>
                <Button color="primary" className="" size="sm" onClick={()=>openModal(category.categoryId)}>
                  View
                </Button>
              </td>

              <td>
                <Button color="info" className="" size="sm">
                  Update
                </Button>
              </td>

              <td>
                <Button color="danger" className="" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
        ))}
          </tbody>
        </Table>
      </div>


      {clickCategory && modelHtml()}

    </div>

  );
}

export default ManageCategories;