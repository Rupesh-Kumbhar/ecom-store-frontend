import React, { useState, useEffect } from "react";
import { Button, Table,FormGroup,Input } from "reactstrap";
import { fetchCategories,deleteCategory,loadSingleCategory,updateCategory } from "../../../Services/categoryService";
import { CardText, CardBody,Card,Modal,ModalBody,ModalHeader,ModalFooter} from "reactstrap";
import { toast } from "react-toastify";

function ManageCategories(){

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modal, setModal] = useState(false);
  const [clickCategory, setClickCategory] = useState(null);

  const [updateModal, setUpdateModal] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState({
    categoryId: "",
    categoryName: "",
  });

  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(false);

  const openModal = (clickCategoryId) => {
    setModal(true);
    loadSingleCategory(clickCategoryId)
      .then((data) => {
        setClickCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openUpdateModal = (categoryId) => {
    setUpdateModal(true);
    loadSingleCategory(categoryId)
      .then((data) => {
        setUpdatedCategory({
          categoryId: data.categoryId,
          categoryName: data.categoryName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeUpdateModal = () => {
    setUpdateModal(false);
  };

  const handleUpdate = () => {
    updateCategory(updatedCategory.categoryId, {
      categoryName: updatedCategory.categoryName,
    })
      .then(() => {
        toast.success("Category updated successfully!");
        closeUpdateModal();
        fetchCategories()
          .then((data) => {
            setCategories(data);
          })
          .catch((error) => {
            console.error(error);
            toast.error("Failed to refresh categories list.");
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update category.");
      });
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading categories:", error);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleDelete = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategory(categoryId)
        .then(() => {
          toast.success("Category deleted successfully!");
          fetchCategories()
            .then((data) => {
              setCategories(data);
            })
            .catch((error) => {
              console.error(error);
              toast.error("Failed to refresh categories list.");
            });
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to delete category.");
        });
    }
  };

  if (loading) {
    return <div>Loading categories...</div>;
  }

  const modelHtml=()=>{
    return(
      <Modal isOpen={modal} toggle={closeModal} size="lg">
        <ModalHeader toggle={closeModal}></ModalHeader>
        <ModalBody>
          {clickCategory && (
            <Card className="shadow-sm" color="light">
              <CardBody>
                <h5>Category Id: {clickCategory.categoryId}</h5>
                <CardText>
                  <h5>Category Name: {clickCategory.categoryName}</h5>
                </CardText>
              </CardBody>
            </Card>
          )}
        </ModalBody>
        <ModalFooter>
          <Button className="modal-close-btn w-25" size="sm" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  const updateModalHtml = () => {
    return (
      <Modal isOpen={updateModal} toggle={closeUpdateModal} size="lg">
        <ModalHeader toggle={closeUpdateModal}>Update Category</ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Category Name</label>
            <Input
              type="text"
              value={updatedCategory.categoryName}
              onChange={(e) =>
                setUpdatedCategory({
                  ...updatedCategory,
                  categoryName: e.target.value,
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
              <tr key={category.categoryId}>
                <td>{category.categoryId} </td>
                <td>{category.categoryName} </td>
                <td>
                  <Button color="primary" className="" size="sm" onClick={()=>openModal(category.categoryId)}>
                    View
                  </Button>
                </td>

                <td>
                  <Button color="info" className="" size="sm" onClick={()=> openUpdateModal(category.categoryId)} >
                    Update
                  </Button>
                </td>

                <td>
                <Button color="danger" className="" size="sm"  onClick={() => handleDelete(category.categoryId)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {clickCategory && modelHtml()}
      {updateModal && updateModalHtml()}
    </div>
  );
}

export default ManageCategories;