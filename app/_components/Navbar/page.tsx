import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import JwtDecode from "jwt-decode";
import {getServerSession} from "next-auth";

interface User {
  isAdmin: boolean;
  // Add other user properties if available in the decoded token
}
import UserMenuButton from "../Userprofile/page";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Navbar() {
  
  const session = await getServerSession(authOptions);

  

  return (
    <header className="w-full flex justify-between gap-8 items-center sticky top-0 left-0 bg-light-blue z-2 shadow-md transition-all duration-200" >
      <nav className={ "nav-active w-full flex justify-between px-8 py-4 items-center"}>
        <h2 className="nav-logo text-bol">
          <Link className="font-bold text-[24px]" href={"/"}>HealthBooker</Link>
        </h2>
        <ul className="nav-links flex gap-8">
          <li>
            <Link className="font-bold text-black" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className="font-bold text-black"  href={"/doctors"}>Doctors</Link>
          </li>
          
        
           
            <li>
              <Link className="font-bold text-black"  href={"/appointments"}>Appointments</Link>
            </li>
           
            <li>
              <Link className="font-bold text-black"  href={"/applyfordoctor"}>Apply for doctor</Link>
            </li>
            
            <li>
              <Link className="font-bold text-black"  href={"/profile"}>Profile</Link>
            </li>
          
        </ul>
       
      </nav>
       <UserMenuButton session={session}/>
    </header>
  );
};


