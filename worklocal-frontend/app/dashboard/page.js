'use client';
import React, { useContext } from "react";
import Employer from "./employer/page";
import Jobseeker from "./jobseeker/jobseekerdetails/page";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const {userttype} = useContext(AuthContext);
  return (
    <div className="dashboard">
      <header>
        <h1>Welcome to the Dashboard</h1>
       
      </header>

      <main>
       
         {userttype==="service" ? <Employer></Employer> : <Jobseeker></Jobseeker>}
      </main>
    </div>
  );
}

export default Dashboard;