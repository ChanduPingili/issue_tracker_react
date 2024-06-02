import Accordion from "react-bootstrap/Accordion";
import Service from "./Service";
function OrgServices({ allServices }) {
  console.log("in services");
  console.log("all servcies are " + allServices);
  return (
    <Accordion defaultActiveKey="10">
      {allServices.map((service) => (
        <Service service={service} />
      ))}
    </Accordion>
  );
}

export default OrgServices;
