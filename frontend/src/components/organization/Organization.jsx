import { useEffect, useState } from "react";
// import "./App.css";
import axios from "axios";
// import EmpNavbar from "./emp_navbar";
import OrgNavbar from "./OrgNavbar";
// import EmpIssues from "./issues";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OrgServices from "./OrgServices";
import OrgIssues from "./OrgIssues";
import OrgEmployees from "./OrgEmployees";
// import OrgEditEmployee from "./OrgEditEmployee";
import OrgAddEmployee from "./OrgAddEmployee";
import OrgAddService from "./OrgAddService";
// import OrgEditService from "./OrgEditService";

const Organization = () => {
  // const [currentEmpIssues, setCurrentEmpIssues] = useState([]);
  const [tempIssues, setTempIssues] = useState([]);
  // // const [empId, setEmpId] = useState(localStorage.getItem("empId"));
  // const [empId, setEmpId] = useState("201"); // assuming empId is set to "1" for testing

  const [allEmployees, setAllEmployees] = useState([]);
  const [allIssues, setAllIssues] = useState([]);
  const [allServices, setAllServices] = useState([]);
  const [allstatus, setAllStatuses] = useState([]);
  const [solvedIssues, setSolvedIssues] = useState([]);
  const [unsolvedIssues, setUnsolvedIssues] = useState([]);
  // const [orgId, setOrgId] = useState(localStorage.getItem("orgId"));
  const [orgId, setOrgId] = useState("2001"); // assuming empId is set to "1" for testing
  const [org, setOrg] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let solvedIssuesData = [];
      let unsolvedIssuesData = [];
      let issuesData = [];
      let employeesData = [];
      let servicesData = [];
      let orgData = {};
      // Simulating API calls

      try {
        await axios
          .get(`http://localhost:2000/api/organizationdetails/${orgId}`)
          .then((res) => {
            orgData = res.data;
          });
        setOrg(orgData);
        console.log("Org data" + orgData);

        //fetching services
        orgData.serviceIds.forEach((serviceId) => {
          axios
            .get(`http://localhost:2000/api/service/${serviceId}`)
            .then((res) => {
              servicesData.push(res.data);
            });
        });

        setAllServices(servicesData);

        //employees
        orgData.empIds.forEach((empId) => {
          axios
            .get(`http://localhost:2000/api/employee/${empId}`)
            .then((res) => {
              employeesData.push(res.data);
            });
        });

        setAllEmployees(employeesData);

        //issues
        orgData.orgIssueId.forEach((issueId) => {
          axios
            .get(`http://localhost:2000/api/issues/${issueId}`)
            .then((res) => {
              if(res)
                issuesData.push(res.data);
              if (res.data.status === "closed") {
                solvedIssuesData.push(res.data);
              } else {
                unsolvedIssuesData.push(res.data);
              }
            });
        });

        setAllIssues(issuesData);
        setSolvedIssues(solvedIssuesData);
        setUnsolvedIssues(unsolvedIssuesData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [orgId]);

  const handleAllIssues = () => {
    setTempIssues(allIssues);
    console.log(allIssues);
    console.log("All Issues Clicked");
    navigate("/org/issues");
  };

  const handleSolvedIssues = () => {
    setTempIssues(solvedIssues);
    console.log("Solved Issues Clicked");
    navigate("/org/issues");
  };

  const handleUnsolvedIssues = () => {
    setTempIssues(unsolvedIssues);
    console.log("Unsolved Issues Clicked");
    navigate("/org/issues");
  };

  const handleAllServices = () => {
    // setTempIssues(allServices);
    // console.log(currentEmpIssues);
    console.log("All Services Clicked");
    navigate("/org/services");
    console.log("in Services Clicked");
  };
  const handleAllEmployees = () => {
    // setTempIssues(allEmployees);
    // console.log(currentEmpIssues);
    console.log("All Employees Clicked");
    navigate("/org/employees");
  };
  const handleAddEmployee = () => {
    // setTempIssues(currentEmpIssues);
    // console.log(currentEmpIssues);
    console.log("All add employee Clicked");
    navigate("/org/addemployee");
  };
  const handleAddService = () => {
    // setTempIssues(currentEmpIssues);
    // console.log(currentEmpIssues);
    console.log("All add service Clicked");
    navigate("/org/addservice");
  };

  const handleEditEmployee = () => {
    console.log("All edit service Clicked");
    navigate("/org/editemployee");
  };

  const handleEditService = () => {
    console.log("All edit service Clicked");
    navigate("/org/editservice");
  };
  return (
    <>
      <OrgNavbar
        handleAllIssues={handleAllIssues}
        // handleSolvedIssues={handleSolvedIssues}
        // handleUnsolvedIssues={handleUnsolvedIssues}
        handleAllServices={handleAllServices}
        handleAllEmployees={handleAllEmployees}
        handleAddEmployee={handleAddEmployee}
        handleAddService={handleAddService}
        // handleEditEmployee={handleEditEmployee}
        // handleEditService={handleEditService}
      />
      <Routes>
        <Route
          path="/services"
          element={<OrgServices allServices={allServices} />}
        />
        <Route path="/issues" element={<OrgIssues tempIssues={tempIssues} />} />
        <Route
          path="/employees"
          element={<OrgEmployees allEmployees={allEmployees} />}
        />
        <Route path="/addemployee" element={<OrgAddEmployee orgId={orgId} />} />
        <Route path="/addservice" element={<OrgAddService orgId={orgId} />} />
        {/* <Route path="/org/editemployee" element={<OrgEditEmployee orgId = {orgId} />}/>
        <Route path="/org/editservice" element={<OrgEditService orgId = {orgId} />}/> */}
      </Routes>
    </>
  );
};

export default Organization;

//   const statusResponse = await axios.get(
//     "http://localhost:2000/api/status"
//   );
//   statusData = statusResponse.data;
//   console.log(statusData);

//   const issuesResponse = await axios.get(
//     `http://localhost:2000/api/issues/employee/${empId}`
//     // {
//     //   httpAgent: proxyAgent,
//     //   httpsAgent: proxyAgent,
//     // }
//   );
//   currentIssueData = issuesResponse.data;
// } catch (error) {
//   console.error(error);
// }

// // Mock data for testing
// // statusData = [
// // 	{
// // 		statusId: "123",
// // 		status: "closed",
// // 		issueId: "1",
// // 		statusDescription: "It may take 2 days",
// // 	},
// // 	{
// // 		statusId: "124",
// // 		status: "open",
// // 		issueId: "2",
// // 		statusDescription: "It may take 5 days",
// // 	},
// // ];

// // currentIssueData = [
// // 	{
// // 		issueId: "1",
// // 		issueName: "Delivery",
// // 		issueDesc: "Got wrong item",
// // 		connectedTo: "1234",
// // 		status: "123",
// // 	},
// // 	{
// // 		issueId: "2",
// // 		issueName: "Payment",
// // 		issueDesc: "Payment failed",
// // 		connectedTo: "1254",
// // 		status: "124",
// // 	},
// // ];

// setCurrentEmpIssues(currentIssueData);
// setStatus(statusData);

// const solvedIssuesData = currentIssueData.filter((issue) =>
//   statusData.some(
//     (status) =>
//       status.issueId === issue.issueId && status.status === "closed"
//   )
// );
// const unsolvedIssuesData = currentIssueData.filter((issue) =>
//   statusData.some(
//     (status) =>
//       status.issueId === issue.issueId && status.status !== "closed"
//   )
// );

// setSolvedIssues(solvedIssuesData);
// setUnsolvedIssues(unsolvedIssuesData);
// setTempIssues(currentIssueData);
