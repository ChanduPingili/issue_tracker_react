const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors=require('cors');

const IssueModel = require('./Model/IssueModel');
const issueController = require('./Controller/IssueController');

const StatusModel = require('./Model/StatusModel');
const statusController = require('./Controller/StatusController');

const EmployeeModel =require('./Model/EmployeeModel');
const EmployeeController=require('./Controller/EmployeeController');

const ServiceModel = require('./Model/ServiceModel');
const ServiceController = require('./Controller/ServiceController');

const OrganizationModel = require('./Model/OrganizationModel');
const OrganizationController = require('./Controller/OrganizationController');

const UserModel = require('./Model/UserModel');
const UserController = require('./Controller/UserController');
 


const app = express();
app.use(express.urlencoded({extended:true}))
const PORT =2000;
app.use(bodyParser.json());
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

mongoose.connect('mongodb://127.0.0.1:27017/issue_tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
//Status
//app.post('/api/status/:issueId',statusController.mapIssue)
app.get('/api/status/openStatus',statusController.showOpenStatus);
app.get('/api/status/closedStatus',statusController.showClosedStatus);
app.put('/api/status/:issueId',statusController.updateStatus);
app.get('/api/status',statusController.getStatus);
app.get('/api/status/:statusId',statusController.getOneStatus); //added

//Issues
app.get('/api/issues', issueController.getHomeIssues);
app.get('/api/issues/user/:createdBy',issueController.getUserIssues);
app.get('/api/issues/employee/:connectedTo',issueController.getEmployeeIssues);
app.get('/api/issues/:issueId', issueController.getIssue);
app.put('/api/issues/:issueId', issueController.IssueEditSave);
app.delete('/api/issues/:issueId', issueController.IssueDelete);

//Employee
app.get('/api/employee/:empId', EmployeeController.getEmployee); //added
app.get('/api/employee', EmployeeController.getEmployees);
app.post('/api/employee', EmployeeController.addEmployee);
app.put('/api/employee/:empId',EmployeeController.editEmployee );
app.delete('/api/employee/:empId',EmployeeController.deleteEmployee);

//Services
app.get('/api/service', ServiceController.getServices);
app.get('/api/service/:sId', ServiceController.getService); //added
app.post('/api/service', ServiceController .addService);
app.put('/api/service/:sId',ServiceController.editService );
app.delete('/api/service/:sId',ServiceController.deleteService );

//Organizations
app.post('/api/organization',OrganizationController.addOrganization);
app.get('/api/organization', OrganizationController.getOrganizations);
app.get('/api/organization/:orgId',OrganizationController.getOrganization); //added
app.get('/api/organizationdetails/:orgId',OrganizationController.getOrganizationDetails); //added
//Users
app.get('/api/users',UserController.getAllUsers);
app.post('/api/user/raise-ticket', issueController.IssueSave);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});