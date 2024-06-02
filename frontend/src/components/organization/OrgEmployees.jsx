import {CardGroup, Row} from "react-bootstrap";
import axios from "axios";
import OrgEmpBody from "./OrgEmpBody";
function OrgEmployees({ allEmployees }) {
  const handleDelete = async (empId) => {
    try {
      await axios.delete(`http://localhost:2000/api/employee/${empId}`);
    } catch (err) {
      // alert(err);
      console.log(err);
    }
  };

  return (
    <>
      <Row>
        <CardGroup>
          {allEmployees.map((emp) => (
            <OrgEmpBody emp={emp} handleDelete={handleDelete} />
          ))}
        </CardGroup>
      </Row>
    </>
  );
}

export default OrgEmployees;
