'use client';
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext.js";

export default function LoginPage() {

  
  const { setIsLoggedIn, setuser } = useContext(AuthContext);

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formdata, setformdata] = useState({
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata(prev => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const handleSignin = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

      
        credentials: "include",

        body: JSON.stringify(formdata)
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Login failed");
        return;
      }

    
      setIsLoggedIn(true);
      setuser(data.user);

    
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccessMessage("Signin successful");

  
      router.push("/dashboard");

    } catch (error) {
      setErrorMessage("Signin failed. Please try again.");
    }
  };

  return (
    <div className="App">
      <main className="loginlayout">
        <div className="loginform">

          <h2>Signin</h2>

          <div className="input-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={formdata.email}
              onChange={handlechange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formdata.password}
              onChange={handlechange}
            />
          </div>

          <button className="signup-btn" onClick={handleSignin}>
            Sign In
          </button>

          {successMessage && <p className="success-box">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}

          
          <div className="Forgotpassword">
            <span>Forgot password</span>
          </div>

          <p>
            Don’t have an account?{" "}
            <Link href="/signup">
              <span>Sign up</span>
            </Link>
          </p>

        </div>
      </main>
    </div>
  );
}