'use client';
import React, { useContext } from "react";
import  Link  from 'next/link';
import { AuthContext } from "../context/AuthContext";
import '../styles/App.css';
import Image from 'next/image';
import AddIcon from "../util/symbols/plus";
export default function Header() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link href = "/">
          <Image src="/worklocal.png" alt="logo" width={120} height={50} className="logo-img" />
          </Link>
        </div>
        <div className="Navbar">
         
              <span className="firstnav">Find Local Jobs Near You</span>
             <span className="secondnav">About</span>
             <span className="thirdnav">Contact</span>
             <Link href="/jobposting" className="thirdnav jobpost">Post a job its free</Link>
    
        </div>
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link href="/login">
                <button className="login-btn">Login</button>
              </Link>
              <Link href="/signup">
                <button className="signup-btn">Signup</button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <button className="login-btn">Dashboard</button>
              </Link>
              <button className="signup-btn" onClick={() => setIsLoggedIn(false)}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
     
    </header>
  );
}

