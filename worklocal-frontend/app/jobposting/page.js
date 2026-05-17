'use client'
import BriefcaseIcon from "../util/jobsymbol";
import LocationIcon from "../util/symbols/location";
import RupeeIcon from "../util/symbols/rupee";
import RequirementIcon from "../util/symbols/requirement";
import JobIcon from "../util/symbols/job";
import GlobeIcon from "../util/globiocn";
import ArrowsRightLeftIcon from "../util/symbols/hybridicon";
import { GovernmentIcon } from "../util/governmenticon";
import  UploadIcon from "../util/symbols/upload";
import PrivateIcon from "../util/symbols/private";
import LinkIcon from "../util/symbols/link";
import MailIcon from "../util/symbols/mail";
import PhoneIcon from "../util/symbols/phone";
import TrashIcon from "../util/symbols/delete";
import { WithContext as ReactTags } from "react-tag-input";
import ApplyIcon from "../util/symbols/Apply";
import React, { useState } from "react";
export default function RootLayout({ children }) {
  const [step,setstep] = useState(0);
  const [Questions,setQuestions] = useState([]);
 const addQuestion = () => {
  setQuestions(prev => [
    ...prev,
    { id: crypto.randomUUID(), text: "" }
  ]);
};
  
  const progress = ((step + 1) / 7) * 100;
  const KeyCodes = { comma: 188, enter: 13, };
  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  const [tags, setTags] = useState([]);
  const nextStep = () => {
  setstep((prev) => Math.min(prev + 1,6));
};

const prevStep = () => {
  setstep((prev) => Math.max(prev - 1,0));
};
const handleAddition =(tag)=>
{
  setTags([...tags,tag]);
};
const handleDeletion = (i)=>
{
  setTags(tags.filter((tag,index)=>index!=i));
}
  return (
    
    <div className="App">
    <div className="jobposting-container">
    <div className='jobposting'>
     
      <div className = "jobpostingheadline"><BriefcaseIcon className="jobpostingicon" />Post a Job</div>
      <div className="jobdes">Fill out all sections to publish</div>
      <button className={step===0?"jobbutton activejobbutton":"jobbutton"} onClick={()=>setstep(0)}>
        <BriefcaseIcon className="jobpostingicons"></BriefcaseIcon> job basics
        <div style={{ fontWeight: "500", paddingTop: "10px",textAlign:"center" }}>Title type & sector</div>
      </button>
      <button className={step===1?"jobbutton activejobbutton":"jobbutton"} onClick={()=>setstep(1)}>
        <LocationIcon className="jobpostingicons"></LocationIcon> Location
        <div style={{ fontWeight: "500", paddingTop: "10px",textAlign:"center" }}>Where is this job Located ?</div>
      </button>
      <button className={step===2?"jobbutton activejobbutton":"jobbutton"}onClick={()=>setstep(2)} >
        <RupeeIcon className="jobpostingicons"></RupeeIcon> Compensation
        <div style={{ fontWeight: "500", paddingTop: "10px",textAlign:"center" }}>Salary & benefits</div>
      </button>
      <button className={step===3?"jobbutton activejobbutton":"jobbutton"}onClick={()=>setstep(3)}>
        <RequirementIcon className="jobpostingicons"></RequirementIcon> Requirements
        <div style={{ fontWeight: "500", paddingTop: "10px",textAlign:"center" }}>Skills & experience</div>
      </button>
      <button className={step===4?"jobbutton activejobbutton":"jobbutton"}onClick={()=>setstep(4)}>
        <JobIcon className="jobpostingicons"></JobIcon> Company
        <div style={{ fontWeight: "500", paddingTop: "10px",textAlign:"center" }}>Company information</div>
      </button>
      <button className={step===5?"jobbutton activejobbutton":"jobbutton"}onClick={()=>setstep(5)}>
        <ApplyIcon className="jobpostingicons"></ApplyIcon> Applications
        <div style={{ fontWeight: "500", paddingTop: "10px",textAlign:"center" }}>Apply type</div>
      </button>
      <button className={step===6?"jobbutton activejobbutton":"jobbutton"}onClick={()=>setstep(6)}>
        <JobIcon className="jobpostingicons"></JobIcon> Advanced
        
      </button>
    </div>
    {step===0&&<div className="sidejobposting" style={{width:"60%"}} >
      <div className="titlediv third">
      <div className="usableheading" style={{textAlign:"left"}}>Job Basics   </div>
      <div className="progressbar">
  <div
    className="progressfill"
    style={{ width: `${progress}%` }}
  ></div>
</div>
      <div className="usableheading steps">Step 1/7</div>
      </div>
      <div className="line"></div>
      <div className="scrolling">
      <div className="usabletitle">JOB TITLE</div>
      <textarea className="usableplace" placeholder="e.g.Senior frontend developer"></textarea>
      <div className="usabletitle">JOB DESCRIPTION</div>
      <textarea className="usableplace large" placeholder="Describe the role,key responsibilities and what makes this opportunity unique..."></textarea>
      <div className="bind">
      <div className="jobbtype">
      <div className="usabletitle">JOB TYPE 
      </div>
      <button className="typebutton onsite">Full-time</button>
      <button className="typebutton onsite">Part-time</button>
      <button className="typebutton onsite">Internship</button>
      <button className="typebutton onsite">Contract</button>
      </div>
      <div className="worktype">
      <div className="usabletitle">WORK MODE</div>
    
      <button className="typebutton onsite"><JobIcon className="jobpostingiconss"></JobIcon>onsite</button>
      <button className="typebutton onsite"><GlobeIcon className="jobpostingiconss"></GlobeIcon>remote</button>
      <button className="typebutton onsite"><ArrowsRightLeftIcon className="jobpostingiconss"></ArrowsRightLeftIcon>hybrid</button>
      </div>
      </div>
      <div className="usabletitle">SECTOR</div>
      <button className="typebutton government" ><GovernmentIcon className="jobpostingiconss"></GovernmentIcon>Government</button>
      <button className="typebutton private"><PrivateIcon className={"jobpostingiconss"}></PrivateIcon>private</button>
      </div>
      <div className="line"></div>
      <div className="bindd">
      <button className="usablebackbutton">Back</button>
      <button onClick={()=>setstep(1)} className="usablenextbutton">Next</button>
      </div>
    </div>}
    {step===1&&<div className="sidejobposting" style={{width:"60%"}}>
      <div className="titlediv third">
      <div className="usableheading"style={{textAlign:"left"}}>Location</div>
      <div className="progressbar">
  <div
    className="progressfill"
    style={{ width: `${progress}%` }}
  ></div>
</div>
      <div className="usableheading steps"style={{height:"10px"}}>Step 2/7</div>
      </div>
      <div className="line"></div>
      <div className="scrolling">
      <div className="usabletitle left">COMPANY ADDRESS </div>
      <textarea className="usableplace" placeholder="Enter full company address"></textarea>
      <div className="usabletitle left">CITY</div>
      <div className="wrap">
      <LocationIcon className="typebutton position"></LocationIcon>
      <textarea style={{paddingLeft:"70px"}} className="usableplace" placeholder="e.g. Visakhapatnam"></textarea>
      </div>
      <div className="usabletitle left">STATE</div>
      <textarea className="usableplace" placeholder="e.g. Andhrapradesh"></textarea>
      <div className="usabletitle left">COUNTRY</div>
      <textarea className="usableplace" placeholder="INDIA"></textarea>
      <div className="usabletitle left">PINCODE</div>
      <textarea className="usableplace" placeholder="Enter pincode where company is located"></textarea>
      </div>
      <div className="line"></div>
      <div className="bindd">
      <button onClick={prevStep}className="usablebackbutton">Back</button>
      <button onClick={nextStep} className="usablenextbutton">Next</button>
      </div>
    </div>}
    {step===2&&<div className="sidejobposting" style={{width:"60%"}}>
      <div className="titlediv third">
      <div className="usableheading"style={{textAlign:"left"}}>Compensation</div>
      <div className="progressbar">
  <div
    className="progressfill"
    style={{ width: `${progress}%` }}
  ></div>
</div>
      <div className="usableheading steps"style={{height:"10px"}}>Step 3/7</div>
      </div>
      <div className="line"></div>
      <div className="scrolling">
      <div className="usabletitle left">SALARY RANGE </div>
      <div className="bindone">
      <RupeeIcon className="typebutton rs"></RupeeIcon>
      <textarea className="usableplace min" placeholder="Min Salary(e.g 10000)"></textarea>
      <textarea className="usableplace max" placeholder="Max Salary (e.g 50000)"></textarea>
      </div>
      <div className="information">Leave blank to display "Salary not disclosed"</div>
      <div className="usabletitle left">BENIFITS AND PERKS</div>
      <div className="bindone">
        <div className="checkboxcontainer">
         <div className="bindone"> <input type="checkbox"/><span>PF/Provident Fund</span></div>
          <div className="bindone"> <input type="checkbox"/><span>Paid Leave</span></div>
           <div className="bindone"> <input type="checkbox"/><span>Flexible Hours</span></div>
           <div className="bindone"> <input type="checkbox"/><span>Travel Allowance</span></div>
        </div>
        <div className="checkboxcontainer">
           <div className="bindone"> <input type="checkbox"/><span>Health Insurance</span></div>
            <div className="bindone"> <input type="checkbox"/><span>Performance Bonus</span></div>
             <div className="bindone"> <input type="checkbox"/><span>Remote work</span></div>
              <div className="bindone"> <input type="checkbox"/><span>Meal Subsidy</span></div>
        </div>
      </div>
      </div>
      <div className="line"></div>
      <div className="bindd">
      <button onClick={prevStep}className="usablebackbutton">Back</button>
      <button onClick={nextStep} className="usablenextbutton">Next</button>
      </div>
    </div>
    }
    {step===3&&<div className="sidejobposting" style={{width:"60%"}}>
      <div className="titlediv third">
      <div className="usableheading"style={{textAlign:"left"}}>Requirements</div>
      <div className="progressbar">
  <div
    className="progressfill"
    style={{ width: `${progress}%` }}
  ></div>
</div>
      <div className="usableheading steps"style={{height:"10px"}}>Step 4/7</div>
      </div>
      <div className="line"></div>
      <div className="scrolling">
      <div className="usabletitle left">SKILLS REQUIRED</div>
      <ReactTags
           tags={tags}
           handleDelete={handleDeletion}
           handleAddition={handleAddition}
           delimiters={delimiters}
           placeholder="Add skills..."
      />
      <div className="information">Press Enter or comma after each skill (e.g. React,Java, SQL)</div>
      <div className="usabletitle left">MINIMUM EDUCATION</div>
      <select className="user-type-dropdown dropdown">
        <option>Highschool</option>
        <option>10th</option>
        <option>Intermediate</option>
        <option>Diploma or equalent</option>
        <option>ITI</option>
        <option>Bachelor's Degree</option>
        <option>Master's Degree</option>
        <option>Phd</option>
        <option>Any</option>
      </select>
      <div className="usabletitle left">EXPERIENCE(in years)</div>
      <select className="user-type-dropdown dropdown">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10 +</option>
      </select>
      </div>
      <div className="bindd">
      <button onClick={prevStep}className="usablebackbutton">Back</button>
      <button onClick={nextStep} className="usablenextbutton">Next</button>
      </div>
       </div>}
      
    {step===4&&<div className="sidejobposting" style={{width:"60%"}}>
      <div className="titlediv third">
      <div className="usableheading"style={{textAlign:"left"}}>Company     </div>
      <div className="progressbar">
  <div
    className="progressfill"
    style={{ width: `${progress}%` }}
  ></div>
</div>
      <div className="usableheading steps"style={{height:"10px"}}>Step 5/7</div>
      </div>
      <div className="line"></div>
      <div className="scrolling">
      <div className="usabletitle left">COMPANY NAME</div>
       <textarea className="usableplace" placeholder="Enter Company name"></textarea>
      <div className="usabletitle left">COMPANY LOGO</div>
      <div className="uploadlogocontainer">
        <button className="uploadimagebox" placeholder="Click here to upload"><UploadIcon className="typebutton ts"></UploadIcon><div>Click here to upload</div></button>
      </div>
          <div className="usabletitle" style={{width:"70%"}}>JOB DESCRIPTION</div>
      <textarea className="usableplace large" placeholder="Brief description of your company - culture, mission, size, etc..."></textarea>

      
      </div>
      <div className="line"></div>
      <div className="bindd">
      <button onClick={prevStep}className="usablebackbutton">Back</button>
      <button onClick={nextStep} className="usablenextbutton">Next</button>
      </div>
    </div>
    }
    {step===5&&<div className="sidejobposting" style={{width:"60%"}}>
      <div className="titlediv third">
      <div className="usableheading" style={{textAlign:"left"}}>Applications</div>
      <div className="progressbar">
  <div
    className="progressfill"
    style={{ width: `${progress}%` }}
  ></div>
</div>
      <div className="usableheading steps">Step 6/7</div>
      </div>
      <div className="line"></div>
      <div className="scrolling">
        <div className="usabletitle left">APPLICATION DEADLINE</div>
      <textarea className="usableplace" placeholder="DD/MM/YYYY"></textarea>
      <div className="usabletitle left">NO OF OPENINGS</div>
      <textarea className="usableplace" placeholder="e.g 1 "></textarea>
      <div className="usabletitle left">APPLICATION TYPE</div>
        <div className="applicationbind">
        <button className = "Applicationdiv">
        
          <ApplyIcon className="typebutton as"></ApplyIcon>
          <div style={{color:"#12912d"}}>Apply through Portal</div>
        </button>
        <button className="Applicationdiv">
        <LinkIcon className="typebutton as"></LinkIcon>
         <div style={{color:"#12912d"}} > Apply through External Link</div>
        </button>
        <button className="Applicationdiv">
        <MailIcon className="typebutton as"></MailIcon>
          <div style={{color:"#12912d"}}>Email Apply</div>
        </button>
      
        </div>
      </div>
      <div className="line"></div>
      <div className="bindd">
      <button className="usablebackbutton" onClick={prevStep}>Back</button>
      <button onClick={nextStep} className="usablenextbutton">Next</button>
      </div>
    </div>}
    {step===6&&<div className="sidejobposting" style={{width:"60%"}}>
      <div className="titlediv third">
      <div className="usableheading" style={{textAlign:"left"}}>Advanced    </div>
      <div className="progressbar">
  <div
    className="progressfill"
    style={{ width: `${progress}%` }}
  ></div>
</div>
      <div className="usableheading steps">Step 7/7</div>
      </div>
      <div className="line"></div>
      <div className="scrolling">
        <div className="usabletitle left">RECRUITER CONTACT</div>
        
      <textarea className="usableplace" placeholder="RECRUITER FULL NAME"></textarea>
      <div className="bindone">
      <MailIcon className="typebutton zs"></MailIcon>
      <textarea className="usableplace" style={{paddingLeft:"70px"}} placeholder="RECRUITER@COMPANY.COM" ></textarea>
      </div>
        
        <div className="bindone">
          <PhoneIcon className="typebutton zs"></PhoneIcon>
      <textarea className="usableplace" style={{paddingLeft:"70px"}} placeholder="+91 98765 43210" ></textarea>
       </div>
       <div className="screenbind">
       <div className="usabletitle left">SCREENING QUESTIONS</div>
       <div onClick={addQuestion}className="add">+ Add questions</div>
       </div>
       {Questions.map((q, index) => (
  <div className="bindone" key={q.id}>
    <textarea
      className="usableplace"
      placeholder={`Q${index + 1}: e.g. How many years of relevant experience do you have?`}
      value={q.text}
      onChange={(e) => {
        const updated = [...Questions];
        updated[index].text = e.target.value;
        setQuestions(updated);
      }}
    />
    <div onClick={() => {
        setQuestions(prev => prev.filter((_, i) => i !== index));
      }}>
    <TrashIcon
      className="typebutton zs"
      
    />
    </div>
  </div>
))}
      </div>
      <div className="line"></div>
      <div className="bindd">
      <button className="usablebackbutton" onClick={prevStep}>Back</button>
      
      </div>
    </div>}

    
    
    </div>
    
    </div>
    
  );
}