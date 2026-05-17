'use client';
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from '../context/AuthContext';
import '../styles/App.css';

export default function SignupPage() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const {setuserttype} = useContext(AuthContext);
  const router = useRouter();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordMessage,setpasswordMessage]= useState("");
  const [confirmpass,setconfirmpass] = useState("");
  const[emailMessage,setemailMessage]=useState("");
  const[mobileMessage,setmobileMessage] = useState("");
  const[firstnamemsg,setfirstnamemsg]= useState("");
  const[lastnamemsg,setlastnamemsg]= useState("");
  const[showsuccess,setshowsuccess] = useState(false);
  const[usermsg,setusermsg]= useState("");
  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    userType: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormdata(prev => ({ ...prev, [name]: value }));
  //firstname
  if(name=='firstName')
    if(/[\d]/.test(value))
     {
      setfirstnamemsg("First name should not contain numbers");
     }
     else if(/[!@#$%^&*()_+\-=\[\]{}|\\:;"'<>,.?/~`]/.test(value))
     {
      setfirstnamemsg("First name should not contain special characters");
     }
     else if(!/[a-zA-Z]{3}/.test(value))
     {
          setfirstnamemsg("Minimum 3 characters required");
     }

     
     else if(/[a-zA-Z]{30}/.test(value))
     {
      setfirstnamemsg("maximum 30 characters allowed");
     }
     else
     {
      setfirstnamemsg("");
     }
// LASTNAME
if(name=='lastName')
{
    if(/[\d]/.test(value))
     {
      setlastnamemsg("First name should not contain numbers");
     }
     else if(/[!@#$%^&*()_+\-=\[\]{}|\\:;"'<>,.?/~`]/.test(value))
     {
      setlastnamemsg("First name should not contain special characters");
     }
     
     else if(!/[a-zA-Z]{3}/.test(value))
     {
          setlastnamemsg("Minimum 3 characters required");
     }

     
     else if(/[a-zA-Z]{30}/.test(value))
     {
      setlastnamemsg("maximum 30 characters allowed");
     }
     else
     {
      setlastnamemsg("");
     }

};
//email-------------------------------------------------------------
if(name==='email')
{
  if(/[\s]/.test(value.trim()))
  {
    setemailMessage("Email cannot contain spaces");
  }
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
  {
    setemailMessage("Enter valid email");
  }
  else
  {
    setemailMessage("");
  }

}
//mobile-------------------------------------------------
if(name=='mobileNumber')
{
  
  if(value.length<10)
  {
      setmobileMessage("mobile number should not be less than 10 digits");
  }
  else if(value.length>15)
  {
    setmobileMessage("mobile number should not be greater than 15 digits")
  }
  else
  {
    setmobileMessage("");
  }
}


    //password
   if(name=="password")
   {
    
    if (/\s/.test(value)) {
  setpasswordMessage("Password should not contain spaces");
}  else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/.test(value)) {
  setpasswordMessage("Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character");
} 
else if (value.length < 8) {
  setpasswordMessage("Password should be minimum 8 characters");
}
else if(value.length>64)
{
   setpasswordMessage("Password should be maximum 12 characters");
}
else {
  setpasswordMessage("");
}
if (formdata.confirmPassword && value !== formdata.confirmPassword) {
  setconfirmpass("Password does not match");
} else {
  setconfirmpass("");
}

}
//confirm password
if(name=="confirmPassword")
{
 if (name === "confirmPassword") {
  if (formdata.password && value !== formdata.password) {
    setconfirmpass("Password does not match");
  } else {
    setconfirmpass("");
  }
}
//usertype--------------------------------------------


}
};
const handleblur=(e)=>
{
  const {name,value} = e.target;
  if(name !== "userType")
  {
    const trimmed = value.trim().replace(/\s+/g," ");
    setFormdata(prev=>({
      ...prev,
      [name]:trimmed
    }));
    if (!trimmed && name=="firstName") {
      setfirstnamemsg("First name is required");
    } 
    else if(!trimmed && name == "lastName")
       {
          setlastnamemsg("Last name is required");
       }
    else if(!trimmed && name =="email")
    {
      setemailMessage("email required");
    }
    else if(!trimmed && name =="mobileNumber")
    {
      setmobileMessage("Mobile number required");
    }
    else if(!trimmed && name =="password")
    {
      setpasswordMessage("Password is required");
    }
    else if(!trimmed && name == "confirmPassword")
    {
      setconfirmpass("conform password required");
    }
   
    }
    if(name=="userType")
    {
      if(!value)
      {
        setusermsg("UserType is required");
      }
      else
      {
        setusermsg("");
      }
    }
};


  const handleSignup = async () => {

   const firstnameempty = formdata.firstName.trim();
   const lastnameempty = formdata.lastName.trim();
   const emailempty = formdata.email.trim();
   const mobileempty = formdata.mobileNumber.trim();
   const userempty = formdata.userType;
   const passempty = formdata.password;
   const conpassempty = formdata.confirmPassword;
   if(!firstnameempty)
   {
       setfirstnamemsg("Firstname required");
   }
   else
   {
    setfirstnamemsg("");
   }
   if(!lastnameempty)
   {
    setlastnamemsg("Last name required");
   }
   else
   {
    setlastnamemsg("");
   }
   if(!emailempty)
   {
    setemailMessage("Email is required");
   }
   else
   {
    setemailMessage("");
   }
   if(!mobileempty)
   {
    setmobileMessage("Mobile number required");
   }
   else
   {
    setmobileMessage("");
   }
   if(!userempty)
   {
    setusermsg("userType required");
   }
   else
   {
    setusermsg("");
   }
   if(!passempty)
   {
    setpasswordMessage("Password required");
   }
   else
   {
    setpasswordMessage("");
   }
   if(!conpassempty)
   {
    setconfirmpass("conform password required");
   }
   else
   {
    setconfirmpass("");
   }
   if(!firstnameempty||!lastnameempty||!emailempty||!mobileempty||!userempty||!passempty||!conpassempty)
   {
    return;
   }
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata)
      });

      const data = await response.json();
      console.log(data);
      
      if(!response.ok)
      {
        setErrorMessage(data.error);
        setSuccessMessage("");
        return;
        
      }
      
      
      window.scrollTo({top:0,behavior:"smooth"});
      setSuccessMessage(data.message || "Signup successful");
      setErrorMessage("");
      setshowsuccess(true);
      setTimeout(() => {
  setshowsuccess(false);
}, 3000);

      setTimeout(() => {
        setIsLoggedIn(true);
        setuserttype(formdata.userType);
        router.push("/dashboard");  // navigate to home page
      }, 3500);
    

    } catch (error) {
      console.error("Signup failed:", error);
      setErrorMessage("Signup failed. Please try again.");
      setSuccessMessage("");
    }
  };
  

  return (
    <div className="App">
      <main>
        <div className="general">
{successMessage && <div className={`success-box ${showsuccess?"show":""}`}>{successMessage}</div>}
        <div className="signupform">
          <h2>Signup</h2>

          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstName"
              value={formdata.firstName}
              onChange={handleChange}
               onBlur={handleblur}
              
            />
            {firstnamemsg &&<p className="error">{firstnamemsg}</p>}
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              value={formdata.lastName}
              onChange={handleChange}
              onBlur ={handleblur}
              
             
              
            />
            {lastnamemsg && <p className="error">{lastnamemsg}</p>}
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              onBlur={handleblur}
              
            />
            {emailMessage && <p className="error">{emailMessage}</p>}
            
          </div>

          <div className="input-group">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter number"
              name="mobileNumber"
              value={formdata.mobileNumber}
              onChange={handleChange}
              onBlur={handleblur}
              onKeyDown={(e)=>
              {
                if(!/[0-9]/.test(e.key)&& e.key!=="Backspace")
                {
                  e.preventDefault();
                }
              }
              }

              
            />
            {mobileMessage && <p className="error">{mobileMessage}</p>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              onBlur={handleblur}
            />
            {passwordMessage && <p className="error">{passwordMessage}</p>}
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="text"
              placeholder="Re-enter your password"
              name="confirmPassword"
              value={formdata.confirmPassword}
              onChange={handleChange}
              onBlur={handleblur}
            />
            {confirmpass && <p className="error">{confirmpass}</p>}
          </div>

          <div className="input-group">
            <label>User type</label>
            <select
              className="user-type-dropdown"
              name="userType"
              value={formdata.userType}
              onChange={handleChange}
              onBlur={handleblur}
            >
              <option value="">Select type</option>
              <option value="job">Job seeker</option>
              <option value="service">Employer</option>
            </select>
            {usermsg && <p className="error">{usermsg}</p>}
           
          </div>

          <div className="input-groupsignup">
            <button className="signup-btn" onClick={handleSignup} disabled={
  !!firstnamemsg ||
  !!passwordMessage ||
  !!emailMessage ||
  !!lastnamemsg||
  !!mobileMessage||
  !!confirmpass||
  !!usermsg
}
>
              Signup
            </button> 
             
          </div>
          <div className="input-group-have">
            <label>Have an Account</label>
            <span className = "downlink">Signin</span>
            
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
