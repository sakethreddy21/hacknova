"use client"
import './app.css'
import React from "react";

import AboutUs from "./_components/AboutUs/page";
import Footer from "./_components/Footer/page";
import { Toaster } from 'react-hot-toast';

const Home = () => {
  

  return (
    <>
     <AboutUs />
      
      <Footer />
    <Toaster/>
    </>
  );
};

export default Home;