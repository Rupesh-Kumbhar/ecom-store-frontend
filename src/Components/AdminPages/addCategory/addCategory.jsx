import React from "react";
import "../addCategory/addCategory.scss"
import { Container,Card, CardBody, CardText, Label,Input, Button} from "reactstrap";


function AddCategory(){
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
                <Input className="mt-3" type="text"></Input>
              </CardText>
              <div className="col-sm-12 p-0 text-center">
                <Button className="mt-4 create-cat w-25">Create</Button>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
}

export default AddCategory