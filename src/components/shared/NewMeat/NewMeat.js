import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class NewMeat extends React.Component {
  state = {
    modal: false,
    meatName: '',
    meatPhoto: '',
    meatExpDate: '',
    meatType: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ meatName: e.target.value });
  }

  photoChange = (e) => {
    e.preventDefault();
    this.setState({ meatPhoto: e.target.value });
  }

  expDateChange = (e) => {
    e.preventDefault();
    this.setState({ meatExpDate: e.target.value });
  }

  meatTypeChange = (e) => {
    this.setState({ meatType: e.target.value }) 
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal})
  }

  render() {
    const {
      modal,
      meatName,
      meatPhoto,
      meatExpDate,
      meatType,
    } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            {/* A cool image is going to go here maybe */}
          <button className="btn btn-danger" onClick={this.toggle}>Add New Meat</button>
          <Modal isOpen={modal} toggle={this.toggle} >
            <ModalHeader toggle={this.toggle}>Add Some New Meat!</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="meatName">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="meatName"
                      placeholder="Meat name goes here"
                      value={meatName}
                      onChange={this.nameChange}
                    />
                </FormGroup>
                <FormGroup>
                  <Label for="photoUrl">Photo Url</Label>
                    <Input type="text"
                      name="photoUrl"
                      id="photoUrl"
                      placeholder="Meat pic url goes here"
                      value={meatPhoto}
                      onChange={this.photoChange}
                    />
                </FormGroup>
                <FormGroup>
                  <Label for="expDate">Expiration Date</Label>
                    <Input
                      type="text"
                      name="expDate"
                      id="expDate"
                      placeholder="Expiration date goes here"
                      value={meatExpDate}
                      onChange={this.expDateChange}
                    />
                </FormGroup>
                <FormGroup tag="fieldset">
                  <legend>Select Meat Type</legend>
                  <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"
                      value="type1"
                      // checked={meatType}
                      // onChange={() => this.meatTypeChange}
                    />Beef
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                    type="radio"
                    name="radio1"
                    value="type2"
                    // checked={meatType}
                    // onChange={() => this.meatTypeChange}
                    />Chicken
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                    type="radio"
                    name="radio1"
                    value="type3" 
                    // checked={meatType}
                    // onChange={() => this.meatTypeChange}
                    />Pork
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input 
                      type="radio"
                      name="radio1"  
                      value="type4"
                      // checked={meatType}
                      // onChange={() => this.meatTypeChange}    
                    />Lamb
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"  
                      value="type5"
                      // checked={meatType}
                      // onChange={() => this.meatTypeChange}     
                    />Duck
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Modal>
          </Col>
        </Row>
      </Container>
    );
  }
}
  

export default NewMeat;
