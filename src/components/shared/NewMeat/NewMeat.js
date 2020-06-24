import React, { useState } from 'react';
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

const NewMeat = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container>
      <Row>
        <Col>
        <button className="btn btn-danger" onClick={toggle}>Add New Meat</button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="meatName">Name</Label>
                <Input type="text" name="name" id="meatName" placeholder="Meat name goes here" />
              </FormGroup>
              <FormGroup>
                <Label for="meatType">Meat Type</Label>
                <Input type="text" name="meatType" id="meatType" placeholder="Meat type goes here" />
              </FormGroup>
              <FormGroup>
                <Label for="expDate">Expiration Date</Label>
                <Input type="text" name="expDate" id="expDate" placeholder="Expiration date goes here" />
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Select Meat Type</legend>
                <FormGroup check>
                <Label check>
                  <Input type="radio" name="type1" id="type1"/>{' '}
                  Beef
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="type2" id="type2" />{' '}
                  Chicken
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="type3" id="type3" />{' '}
                  Pork
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="type4" id="type4" />{' '}
                  Lamb
                </Label>
                    </FormGroup>
                    <FormGroup check>
                <Label check>
                  <Input type="radio" name="type5" id="type5" />{' '}
                  Duck
                </Label>
              </FormGroup>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default NewMeat;
