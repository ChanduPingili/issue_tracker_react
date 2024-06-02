import Accordion from "react-bootstrap/Accordion";

const Service = ({ service }) => {

  // const [issues, ]
  return (
    <>
      <Accordion.Item eventKey={service.sId}>
        <Accordion.Header>{service.sName}</Accordion.Header>
        <Accordion.Body>
          <p>
            About : {service.sDescription}
          </p>
          
          <p>
            Email : {service.sEmail}
          </p>
          <p>
            Service Contact Number : {service.sPhno}
          </p>
          <p>
            Total Number of Employees : {service.sEmpIds.length}
          </p>
          <p>
            Total Number of Issues Raised : {service.sIssueIds.length}
          </p>
          <p>
            Total Number of Issues Solved : {service.sDescription}
          </p>
          <p>
            Total Number of Unsolved Issues  : {service.sDescription}
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default Service;