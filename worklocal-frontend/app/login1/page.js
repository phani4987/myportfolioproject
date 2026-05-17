'use client'
import { useContext, useState } from "react"
export default function signin()
{
    const [errormessage,seterrormessage]= useState();
   const [formdata,setformdata] = useState(
    {
        email :"",
        password : ""
        
    }

   );
   const handlechange = (e)=>
   {
    const {name,value} = e.target;
    setformdata(prev =>(
        {
            ...prev,[name]:value
        }
    ));
    seterrormessage("");

   };
   const handleSignin = async () =>
   {
       try
       {
           const response = await fetch("http://localhost:5000/auth/signin",
            {
                method :"POST",
                header : {"Content-Type":"application/json"},
                credentials : "include",
        body: JSON.stringify(formdata)
            }
           )
       }
       catch
       {

       }
   };
   return(
       <div className="App">
        <main>
            <div className = "loginform">
                <h2>signin</h2>
                <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
             
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              
            />
          </div>

          <button className="signup-btn" >
            Sign In
          </button>




                </div>
        </main>
       </div>
   );
}