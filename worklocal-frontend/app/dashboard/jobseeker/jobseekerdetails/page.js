'use client'
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Jobseeker()
{

  const[formdata,setformdata]=useState({
    Dob :null,
    Gender:"",
    Address:"",
    Country:"",
    Highestqualification:"",
    Skills:"",
    Experience:"",
    jobtype:"",
    location:"",
    resume:""
  });
  
  const  handleChange=(e)=>
  {
    const name = e.target.name;
    const value = e.target.value;
    setformdata({...formdata,
        [name]:value}
    );

  };
  const handleDateChange=(date)=>
  {
     setformdata({...formdata,Dob:date})
  }
  return(
  <div className="employerform">
         <div className="Jobseeker">
        <label>Date of birth</label>
        <DatePicker  selected={formdata.Dob} onChange={handleDateChange} dateFormat="dd/MM/yyyy" placeholderText="Select or type date"toggleCalendarOnIconClick showIcon isClearable  popperPlacement="top-start"></DatePicker>
        </div>
        <div className="Jobseeker">
            <label>Gender</label>
            <select className="jobseeker-dropdown"  name="Gender" value={formdata.Gender} onChange={handleChange} >
              <option value="" disabled >Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
         </div>
          <div className="Jobseeker">
            <label>Address</label>
            <textarea className="textareacss" rows="4" type="textarea" placeholder="Enter Address" name="Address" value={formdata.Address} onChange={handleChange}></textarea>
          </div>
          <div className="Jobseeker">
           <label>Country</label>
           <select className="jobseeker-dropdown" defaultValue={""}>
           <option value="" disabled>Select country</option> 
           <option value="India">India
           </option>

           </select>

          </div>
          <div className="Jobseeker">
            <label>Highest qualification</label>
            <select className="jobseeker-dropdown" defaultValue={""}>
              <option value="">Select qualification</option>
              <option value="Matriculation">10th / Matriculation</option>
              <option value="Intermediate">12th / Intermediate</option>
            </select>
            
          </div>
    
    

  </div>
  
  );
    
} export default Jobseeker;