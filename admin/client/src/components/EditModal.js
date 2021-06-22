import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { updateEmployee } from "../redux/actions/employee";
const EditModal = ({ id, surname, position, salary }) => {
  const [modal, setModal] = useState(false);
  const [formInfo, setFormInfo] = useState({
    surname,
    position,
    salary,
  });
  const dispatch = useDispatch();
  const toggle = () => setModal(!modal);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee({ ...formInfo, id }));
    setModal(!modal);
  };
  return (
    <div>
      <Button onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="surname">Surname</Label>
              <Input
                name="surname"
                onChange={handleChange}
                type="text"
                id="surname"
                value={formInfo.surname}
              />
            </FormGroup>
            <FormGroup>
              <Label for="position">Job position</Label>
              <Input
                type="text"
                name="position"
                onChange={handleChange}
                id="position"
                value={formInfo.position}
              />
            </FormGroup>
            <FormGroup>
              <Label for="salary">Salary</Label>

              <Input
                type="number"
                name="salary"
                onChange={handleChange}
                id="salary"
                value={formInfo.salary}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditModal;
