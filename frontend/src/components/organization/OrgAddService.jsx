import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import SelectService from "../user/SelectService";
import axios from "axios";
const OrgAddService = ({ orgId }) => {
  // const [serviceId, setServiceId] = useState();
  const emailRef = useRef();
  const nameRef = useRef();
  const idRef = useRef();
  const contactRef = useRef();
  const descRef = useRef();

  // const handleServiceId = (id) => {
  //   setServiceId(id);
  // };

  const handleAdd = async (e) => {
    e.preventDefault();
    const newService = {
      sId: idRef.current.value,
      sEmail: emailRef.current.value,
      sName: nameRef.current.value,
      sPhno: contactRef.current.value,
      sOrgId: orgId,
      sEmpIds : [],
      sIssueIds : [],
      sDescription: descRef.current.value,
    };
    console.log(newService);
    await axios
      .post(
        `http://localhost:2000/api/service`,
        newService
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const newService = {
      sId: idRef.current.value,
      sEmail: emailRef.current.value,
      sName: nameRef.current.value,
      sPhno: contactRef.current.value,
      sOrgId: orgId,
      sDescription: descRef.current.value,
    };
    console.log(newService);
    await axios
      .put(
        `http://localhost:2000/api/servcie/${idRef.current.value}`,
        newService
      )
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
        <Form.Label>Service Id </Form.Label>
        <Form.Control type="text" placeholder="Eg: 123456" ref={idRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Service Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Eg: Payment Services"
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Service Description</Form.Label>
        <Form.Control as="textarea" rows={3} ref={descRef} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Select Service</Form.Label>
        <SelectService orgId={orgId} handleServiceId={handleServiceId} />
      </Form.Group> */}
      <Button variant="info" type="submit" onClick={(e) => handleEdit(e)}>
        Edit
      </Button>{"  "}
      <Button variant="info" type="submit" onClick={(e) => handleAdd(e)}>
        Add
      </Button>
    </Form>
  );
};

export default OrgAddService;
