// import './App.css';
// import EmpNavbar from './components/employee/emp_navbar';
// import EmpIssues from './components/employee/issues';
// import {BrowserRouter , Routes , Route} from 'react-router-dom';
import User from './components/user/user';
import Employee from './components/employee/employee';
import Organization from './components/organization/Organization'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/user/*" element={<User/>}/>
        <Route path="/org/*" element={<Organization/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
