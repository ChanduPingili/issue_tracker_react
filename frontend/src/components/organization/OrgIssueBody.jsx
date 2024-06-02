
import Card from "react-bootstrap/Card";
const OrgIssueBody = ({ issue, status }) => {
	// const [issueStatus, setIssueStatus] = useState();

	// const newStatus = status.filter((st) => st.statusId === issue.statusId);
	// setIssueStatus(newStatus);
	
	// if(!issue)
	// 		return;
	return (
		
		<Card className="text-center">
			<Card.Header>
				Issue Id : {issue.issueId} | Status Id : {issue.issueStatusId} |
				Employee Id : {issue.connectedTo}
			</Card.Header>
			<Card.Body>
				{/* <Card.Title>Special title treatment</Card.Title> */}
				<Card.Text>{issue.issueDesc}</Card.Text>
			</Card.Body>
			<Card.Footer className="text-muted">
				Status Description :
				{status ? status.statusDescription : ""} | Status : {status ? status.status: ""}

			</Card.Footer>
		</Card>
	);
};

export default OrgIssueBody;
