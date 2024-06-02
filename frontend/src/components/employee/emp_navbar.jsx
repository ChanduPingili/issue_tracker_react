import Button from "react-bootstrap/Button";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// const EmpNavbar = ({
// 	handleAllIssues,
// 	handleSolvedIssues,
// 	handleUnsolvedIssues,
// }) => {
//   console.log('Received props:', { handleAllIssues, handleSolvedIssues, handleUnsolvedIssues });
// 	const handleAllIssuesClick = () => {
// 	  console.log("All Issues button clicked");
// 	  handleAllIssues();
// 	};

// 	const handleSolvedIssuesClick = () => {
// 	  console.log("Solved Issues button clicked");
// 	  handleSolvedIssues();
// 	};

// 	const handleUnsolvedIssuesClick = () => {
// 	  console.log("Unsolved Issues button clicked");
// 	  handleUnsolvedIssues();
// 	};
// 	return (
// 		<Navbar expand="lg" className="bg-body-tertiary">
// 			<Container fluid>
// 				<Navbar.Brand href="">Issue Tracker</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="navbarScroll" />
// 				<Navbar.Collapse id="navbarScroll">
// 					<Nav
// 						className="me-auto my-2 my-lg-0"
// 						style={{ maxHeight: "100px" }}
// 						navbarScroll
// 					>
// 						<Button
// 							style={{ margin: "10px" }}
// 							variant="outline-info"
// 							onClick={handleAllIssuesClick}
// 						>
// 							All Issues
// 						</Button>
// 						<Button
// 							style={{ margin: "10px" }}
// 							variant="outline-success"
// 							onClick={handleSolvedIssuesClick}
// 						>
// 							Solved Issues
// 						</Button>
// 						<Button
// 							style={{ margin: "10px" }}
// 							variant="outline-danger"
// 							onClick={handleUnsolvedIssuesClick}
// 						>
// 							Unsolved Issues
// 						</Button>
// 					</Nav>
// 					<Form className="d-flex">
// 						<Form.Control
// 							type="search"
// 							placeholder="Search"
// 							className="me-2"
// 							aria-label="Search"
// 						/>
// 						<Button variant="outline-secondary">Search</Button>
// 					</Form>
// 				</Navbar.Collapse>
// 			</Container>
// 		</Navbar>
// 	);
// };

// export default EmpNavbar;

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const EmpNavbar = ({
	handleAllIssues,
	handleSolvedIssues,
	handleUnsolvedIssues,
}) => {
	console.log("Received props:", {
		handleAllIssues,
		handleSolvedIssues,
		handleUnsolvedIssues,
	});

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Brand href="#">Issue Tracker</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Button
							style={{ margin: "10px" }}
							variant="outline-info"
							onClick={handleAllIssues}
						>
							All Issues
						</Button>
						<Button
							style={{ margin: "10px" }}
							variant="outline-success"
							onClick={handleSolvedIssues}
						>
							Solved Issues
						</Button>
						<Button
							style={{ margin: "10px" }}
							variant="outline-danger"
							onClick={handleUnsolvedIssues}
						>
							Unsolved Issues
						</Button>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-secondary">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default EmpNavbar;
