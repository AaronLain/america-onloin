import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
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

import authData from '../../../helpers/data/authData';
import meatData from '../../../helpers/data/meatData';

class NewMeat extends React.Component {
  state = {
    modal: false,
    meatName: '',
    meatPhoto: '',
    meatExpDate: '',
    meatType: '',
    description: ''
  }

  saveMeat = (e) => {
    const {
      meatName,
      meatPhoto,
      meatExpDate,
      meatType,
      description,
    } = this.state;

    const newMeat = {
      name: meatName,
      photoUrl: meatPhoto,
      expDate: meatExpDate,
      meatTypeId: meatType,
      description,
      uid: authData.getUid(),
    }

    meatData.postMeat(newMeat)
      .then(() => this.props.history.push('/home')) //returns to home after post is complete
      .catch((err) => console.error('could not save meat', err));
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

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value })
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
      description,
    } = this.state;
    
    return (
      <Container>
        <Row>
          <Col>
          <Card>
              <CardTitle><h1>Show us what you got!</h1></CardTitle>
                <img src="https://pngimg.com/uploads/steak/steak_PNG38.png" height="100%" width="100%" alt="just some meat" />
              <CardBody>
                <button className="btn btn-danger" onClick={this.toggle}>Add New Meat</button>
              </CardBody>
            </Card>
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
                  <Label for="description">Description</Label>
                    <Input type="text"
                      name="description"
                      id="description"
                      placeholder="Description goes here"
                      value={description}
                      onChange={this.descriptionChange}
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
                      checked={meatType === 'type1'}
                      onChange={this.meatTypeChange}
                    />Beef
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                    type="radio"
                    name="radio1"
                    value="type2"
                    checked={meatType === 'type2'}
                    onChange={this.meatTypeChange}
                    />Chicken
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                    type="radio"
                    name="radio1"
                    value="type3" 
                    checked={meatType === 'type3'}
                    onChange={this.meatTypeChange}
                    />Pork
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input 
                      type="radio"
                      name="radio1"  
                      value="type4"
                      checked={meatType === 'type4'}
                      onChange={this.meatTypeChange}    
                    />Lamb
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio1"  
                      value="type5"
                      checked={meatType === 'type5'}
                      onChange={this.meatTypeChange}    
                    />Duck
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveMeat}>Submit</Button>
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
