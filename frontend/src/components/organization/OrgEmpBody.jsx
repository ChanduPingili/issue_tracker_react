import { Card, Col, Button } from "react-bootstrap";
const OrgEmpBody = ({ emp, handleDelete }) => {

  const handleDeleteClick = ()=>{
    handleDelete(emp.empId);
  }

  return (
    <>
      <Col key={emp.empId} xs={12} sm={6} md={4} lg={3}>
        <Card style={{ margin: "10px" }}> 
          <Card.Body style={{ margin: "10px" }}>
            <Card.Title>{emp.empName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {emp.empId}
            </Card.Subtitle>
            <Card.Text>
              <p>Phone Number : {emp.empPhno}</p>
              <hr />
              <p>Service Id : {emp.empServiceId}</p>
              <hr />
              <p>Number of issues allocated : {emp.empIssueId.length}</p>
              <hr />
              <p>Status : {emp.empStatus}</p>
              <hr />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="dark" onClick={()=>handleDeleteClick()}>
              Delete
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default OrgEmpBody;
