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
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal})
  }

  render() {
    const {
      modal,
      meatName
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
                    />
                </FormGroup>
                <FormGroup>
                  <Label for="photoUrl">Photo Url</Label>
                  <Input type="text" name="photoUrl" id="photoUrl" placeholder="Meat pic url goes here" />
                </FormGroup>
                <FormGroup>
                  <Label for="expDate">Expiration Date</Label>
                  <Input type="text" name="expDate" id="expDate" placeholder="Expiration date goes here" />
                </FormGroup>
                <FormGroup tag="fieldset">
                  <legend>Select Meat Type</legend>
                  <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="type1"/>{' '}
                    Beef
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="type2" />{' '}
                    Chicken
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="type3" />{' '}
                    Pork
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="type4" />{' '}
                    Lamb
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" id="type5" />{' '}
                    Duck
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
