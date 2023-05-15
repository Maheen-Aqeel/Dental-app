import React from 'react';
import Home from '../src/pages/Home';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import StatusReport from './pages/Reports/StatusReport';
import Administrator from './pages/Administrator/Administrator';
import UserSetup from './pages/UserSetup/UserSetup';
import CreateUser from './pages/UserSetup/CreateUser';
import PolicyDetails from './pages/Reports/PolicyDetails';
import RefundPolicy from './pages/Reports/RefundPolicy';
import ModifyPolicy from './pages/Reports/ModifyPolicy';
import ChangeAccPass from './pages/Reports/ChangeAccPass';
import GenerateReport from './pages/Reports/GenerateReport';
import UploadFile from './pages/IssuePolicy/UploadFile';
import IssuePolicy from './pages/IssuePolicy/IssuePolicy';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/status_report" element={<StatusReport />}></Route>
        <Route path="/administrator" element={<Administrator />}></Route>
        <Route path="/user_setup" element={<UserSetup />}></Route>
        <Route path="/create_user" element={<CreateUser />}></Route>
        <Route path="/policy_details" element={<PolicyDetails />}></Route>
        <Route path="/refund_policy" element={<RefundPolicy />}></Route>
        <Route path="/modify_policy" element={<ModifyPolicy />}></Route>
        <Route path="/change_account" element={<ChangeAccPass />}></Route>
        <Route path="/generate_report" element={<GenerateReport />}></Route>
        <Route path="/upload_file" element={<UploadFile />}></Route>
        <Route path="/issue_policy" element={<IssuePolicy />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
