// import react from 'react';
import Accordion from "react-bootstrap/Accordion";
import IssueBody from "./issueBody";
const UserIssues = ({ tempIssues, status }) => {
	return (
		<Accordion>
			{tempIssues && tempIssues.length > 0 ? (
				tempIssues.map((issue) => {
					const newStatus = status.find((ele) => ele.issueId === issue.issueId);
					return (
						<Accordion.Item eventKey={issue.issueId} key={issue.issueId}>
							<Accordion.Header>{issue.issueName}</Accordion.Header>
							<Accordion.Body>
								<IssueBody
									issue={issue}
									key={issue.issueId}
									status={newStatus}
								/>
							</Accordion.Body>
						</Accordion.Item>
					);
				})
			) : (
				<p>No issues available</p>
			)}
		</Accordion>
	);
};

export default UserIssues;
