'use client'
import React, { useState } from "react";
import './styles/App.css';
import Link from 'next/link';
import LocationIcon from "./util/symbols/location";
import JobIcon from "./util/symbols/job";
import UserIcon from "./util/symbols/usericon";
import Experience from "./util/symbols/experience";
import AddIcon from "./util/symbols/plus";

export default function HomePage() {
  const [query, setquery] = useState("");
  const [jobposting,setjobposting] = useState("");

  return ( 
    <div className="App">
      <main className = "mainheading">
      <div className = "Landingpage">
        <section className="hero">
          <div className="herocontent">
            <div className="tagline">Local Jobs And Opportunities</div>
            <div className="heading">Discover Jobs Near You Instantly</div>
            <div className="sub-heading">Empowering local talent with nearby opportunities</div>

            <div className="searchbar">
              <input
                className="search-box"
                type="text"
                placeholder="Enter your city"
                value={query}
                onChange={(e) => setquery(e.target.value)}
              />
              <button className="search-button" type="button">
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="Feature-container">
          <div className="mobileflex"style={{display:"flex"}}>
          <div className="feature-heading">Featured Opportunities</div>
          <Link href ="/jobposting" className="postajob"><AddIcon className="jobpostingbuttionlanding"></AddIcon>post a job its free</Link>
          </div>
          <div className="feature-subheading">Trending jobs🔥</div>

          <div className="side-cards">
            <div className="slidecard1">

    
              <div className="tagrow">
                <div className="featuretag">★ Featured</div>
                <div className="job-type">Private</div>
              </div>

              
              <div className="companydetail">
                <img
                  className="companylogo"
                  src="/logo.png"
                  alt="company logo"
                />

                <div className="text-content">
                  <div className="jobname">Frontend Developer</div>

                  <div className="companyname-wrapper">
                    <JobIcon className="featureicon" />
                    <div className="companyname">Phanindra Worklocal</div>
                  </div>
                </div>
              </div>

      
              <div className="Locationtext">
                <div className="location-wrapper">
                  <LocationIcon className="featureicon" />
                  <div className="LocationAddress">Visakhapatnam</div>
                </div>
              </div>
              <div className="Locationtext">
                <div className="location-wrapper">
                  <UserIcon className="featureicon" />
                  <div className="LocationAddress">41</div>
                </div>
              </div>
              <div className="Locationtext">
                <div className="location-wrapper">
                  < Experience className="experiencefeatureicon" />
                  <div className="Experiencenumber">Entry level</div>
                </div>
              </div>
              <div className = "salarywrapper">
                <div className="duration"> Full Time</div>
                <div className = "Salary">10lpa</div>
              </div>
              <button className = "universalapply">Apply now</button>
              
              

            </div>
            <div className="slidecard1">

    
              <div className="tagrow">
                <div className="featuretag">★ Featured</div>
                <div className="job-type">Private</div>
              </div>

              
              <div className="companydetail">
                <img
                  className="companylogo"
                  src="/logo.png"
                  alt="company logo"
                />

                <div className="text-content">
                  <div className="jobname">Frontend Developer</div>

                  <div className="companyname-wrapper">
                    <JobIcon className="featureicon" />
                    <div className="companyname">Phanindra Worklocal</div>
                  </div>
                </div>
              </div>

      
              <div className="Locationtext">
                <div className="location-wrapper">
                  <LocationIcon className="featureicon" />
                  <div className="LocationAddress">Visakhapatnam</div>
                </div>
              </div>
              <div className="Locationtext">
                <div className="location-wrapper">
                  <UserIcon className="featureicon" />
                  <div className="LocationAddress">41</div>
                </div>
              </div>
              <div className="Locationtext">
                <div className="location-wrapper">
                  < Experience className="experiencefeatureicon" />
                  <div className="Experiencenumber">Entry level</div>
                </div>
              </div>
              <div className = "salarywrapper">
                <div className="duration"> Full Time</div>
                <div className = "Salary">10lpa</div>
              </div>
              <button className = "universalapply">Apply now</button>
              
              

            </div>
          </div>
        </section>
        <section>
          <div className="Alloppurtunities">
            <div className="feature-heading">All oppurtunities</div>
            
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}