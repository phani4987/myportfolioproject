'use client'
import  { useState } from "react";
import EmployerDetails from "./employeerdetails/page";

function EmployerDashboard() {
  const [details, setDetails] = useState(null);

  // This function will receive data from EmployerDetails form
  const handleSave = (data) => {
    setDetails(data);
  };

  return (
    <div>
      {!details ? (
        <EmployerDetails onSubmit={handleSave} />
      ) : (
        <div>
          <h2>Welcome, {details.companyName}</h2>
          <p>Employer Dashboard content goes here...</p>
        </div>
      )}
    </div>
  );
}

export default EmployerDashboard;
