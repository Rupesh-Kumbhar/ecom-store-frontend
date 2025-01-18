import React, {useState} from "react";
import "../addCategory/addCategory.scss"
import { Container,Card, CardBody, CardText,Input, Button} from "reactstrap";
import { createCategory } from "../../../Services/categoryService";
import { toast } from "react-toastify";


function AddCategory(){
  const[cat,setCat]=useState(null);
    const addTitle=()=>{
        createCategory(cat.title).then(data=>{
            console.log(data);
            toast.success("Category Added Successfully")
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
      <div className="col-sm-12 p-0 mt-5">

        <Container>
            <Card color="light">
                <CardBody>
                    <CardText className="text-center">
                    <label><b><h1>Add Category</h1></b></label>
                    </CardText>

                    <CardText>
                    <label><b>Category Title </b></label>
                    <Input className="mt-3" type="text" onChange={event=>{setCat({title:event.target.value})}}></Input>
                    </CardText>
                    <div className="col-sm-12 p-0 text-center">
                        <Button className="mt-4 create-cat w-25" onClick={addTitle}>
                            Create
                        </Button>
                    </div>

                </CardBody>
            </Card>
        </Container>
      </div>
    );
}

export default AddCategory