import axios from "axios";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const IssueBody = ({ issue, status }) => {
	const descRef = useRef();
	const handleAccept = async () => {
		const newStatus = {
			issueId: status.issueId,
			statusId: status.statusId,
			status: "open",
			statusDescription: status.statusDescription,
		};
		console.log(newStatus);
		await axios.put(`http://localhost:2000/api/status:${status.id}`, {
			status: newStatus,
		});
	};

	const handleResponse = async () => {
		const newStatus = {
			issueId: status.issueId,
			statusId: status.statusId,
			status: "open",
			statusDescription: descRef.current.value,
		};
		console.log(newStatus);
		await axios.put(`http://localhost:2000/api/status:${status.id}`, {
			status: newStatus,
		});
	};

	const handleSolved = async () => {
		const newStatus = {
			issueId: status.issueId,
			statusId: status.statusId,
			status: "closed",
			statusDescription: status.statusDescription,
		};
		console.log(newStatus);
		await axios.put(`http://localhost:2000/api/status:${status.id}`, {
			status: newStatus,
		});
	};

	return (
		<Card className="text-center">
			<Card.Header>Issue Id : {issue.issueId}</Card.Header>
			<Card.Body>
				{/* <Card.Title>Special title treatment</Card.Title> */}
				<Card.Text>{issue.issueDesc}</Card.Text>
				<Button
					variant="primary"
					style={{ margin: "10px" }}
					onClick={handleAccept}
				>
					Accept
				</Button>
				<Button
					variant="secondary"
					style={{ margin: "10px" }}
					onClick={handleResponse}
				>
					Add Response
				</Button>
				<Button
					variant="success"
					style={{ margin: "10px" }}
					onClick={handleSolved}
				>
					Solved
				</Button>
			</Card.Body>
			<Card.Footer className="text-muted">
				<input
					type="text"
					placeholder="Enter your response here"
					style={{
						width: "50%",
						textAlign: "center",
						height: "40px",
					}}
					ref={descRef}
				></input>
				<hr />
				Status Id : {issue.status} | Employee Id : {issue.connectedTo}
			</Card.Footer>
		</Card>
	);
};

export default IssueBody;
