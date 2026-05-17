'use client';
import { useContext,useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
export default function Protectedrouter({children})
{
    const {isLoggedin} = useContext(AuthContext);
    const router = useRouter();
    useEffect(()=>
    {
        if(!isLoggedin)
        {
            router.replace("/login");
        }
    },[isLoggedin,router]);
    if (!isLoggedIn) return null;

  return children;
}