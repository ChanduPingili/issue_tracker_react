// import react from 'react';
import Accordion from "react-bootstrap/Accordion";
import OrgIssueBody from "./OrgIssueBody";
import axios from "axios";
import { useState, useEffect } from "react";
const OrgIssues = ({ tempIssues }) => {
  // console.log("in orgissues " + tempIssues);
	const [statuses, setStatuses] = useState([]);
	useEffect(() => {
    const fetchStatuses = async () => {
      const newStatuses = {};
      for (const issue of tempIssues) {
        const response = await axios.get(
          `http://localhost:2000/api/status/${issue.issueStatusId}`
        );
        newStatuses[issue.issueId] = response.data;
      }
      setStatuses(newStatuses);
    };

    if (tempIssues && tempIssues.length > 0) {
      fetchStatuses();
    }
  }, [tempIssues]);
  // const getStatus = async (serviceId) => {
  //   const newStatus = await axios.get(
  //     `http://localhost:2000/api/status/${serviceId}`
  //   );
  //   setStatus(newStatus);
  // };
  return (
    <Accordion>
      {tempIssues && tempIssues.length > 0 ? (
        tempIssues.map((issue) => {
					if (issue) {
						const status = statuses[issue.issueId];
            return (
              <Accordion.Item eventKey={issue.issueId} key={issue.issueId}>
                <Accordion.Header>{issue.issueName}</Accordion.Header>
                <Accordion.Body>
                  <OrgIssueBody
                    issue={issue}
                    key={issue.issueId}
                    status={status}
                  />
                </Accordion.Body>
              </Accordion.Item>
            );
          }
					return undefined;
        })
      ) : (
        <p>No issues available</p>
      )}
    </Accordion>
  );
};

export default OrgIssues;
