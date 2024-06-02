import { useRef, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SelectService from "../user/SelectService";
import axios from "axios";
const OrgAddEmployee = ({ orgId }) => {
  const [serviceId, setServiceId] = useState();
  const emailRef = useRef();
  const nameRef = useRef();
  const idRef = useRef();
  const pwdRef = useRef();
  const contactRef = useRef();

  const handleServiceId = (id) => {
    setServiceId(id);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      empId: idRef.current.value,
      empName: nameRef.current.value,
      empEmail: emailRef.current.value,
      empPassword: pwdRef.current.value,
      empPhno: contactRef.current.value,
      taskCount: 0,
      empOrgId: orgId,
      empServiceId: serviceId,
    };
    console.log(newEmployee);
    await axios
      .put(
        `http://localhost:2000/api/employee/${idRef.current.value}`,
        newEmployee
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const newEmployee = {
      empId: idRef.current.value,
      empName: nameRef.current.value,
      empEmail: emailRef.current.value,
      empPassword: pwdRef.current.value,
      empPhno: contactRef.current.value,
      taskCount: 0,
      empOrgId: orgId,
      empServiceId: serviceId,
    };
    console.log(newEmployee);
    await axios
      .post(`http://localhost:2000/api/employee`, newEmployee)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Employee Id </Form.Label>
        <Form.Control type="text" placeholder="Eg: 123456" ref={idRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Eg: Payment Failed"
          ref={nameRef}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Eg: name@example.com"
          ref={emailRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Eg: 99999xxxxx"
          ref={contactRef}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Select Service</Form.Label>
        <SelectService orgId={orgId} handleServiceId={handleServiceId} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPlaintextPassword">
        <Form.Label >
          Password
        </Form.Label>
          <Form.Control type="password" ref={pwdRef} placeholder="Password" />
      </Form.Group>
      <Button variant="info" type="submit" onClick={(e) => handleEdit(e)}>
        Edit
      </Button>
      {"  "}
      <Button variant="info" type="submit" onClick={(e) => handleAdd(e)}>
        Add
      </Button>
    </Form>
  );
};

export default OrgAddEmployee;
