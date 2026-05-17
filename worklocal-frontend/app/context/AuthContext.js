'use client';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userttype,setuserttype] = useState("");
  const [user,setuser] = useState(null);
  useEffect(()=>
{
  const storeUser = localStorage.getItem("user");
  if(storeUser)
  {
    const parsed = JSON.parse(storeUser);
    setUser(parsed);
    setIsLoggedIn(true);
    setuserttype(parsed?.type||"");
  }
},[])
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,userttype,setuserttype,user,setuser }}>
      {children}
    </AuthContext.Provider>
  );
};


