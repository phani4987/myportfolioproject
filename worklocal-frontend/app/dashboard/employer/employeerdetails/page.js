'use client';
import React, { useState } from "react";
import "../../../styles/App.css";

function Employedashboard() {

  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    phoneNumber: "",
    address: "",
    city: "",
    pincode: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="App">
      <main>
        
          <h2>Employer Details</h2>
         < div className = "employerform">
          <div className="detail-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter company details"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="detail-group">
            <label>Company Email</label>
            <input
              type="email"
              name="companyEmail"
              placeholder="Enter company Email"
              value={formData.companyEmail}
              onChange={handleChange}
            />
          </div>

          <div className="detail-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="detail-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="detail-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="detail-group">
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="Enter pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>

          <div className="detail-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="buttongrp">
            <button className="Save">Save Details</button>
            <button className = "cancel">Cancel</button>
            
          </div>
        </div>
      </main>
    </div>
    
  );
}

export default Employedashboard;
