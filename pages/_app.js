/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/globals.css";
import SocialMedia from "../Components/SocialMedia";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <Component {...pageProps} />
      
      <Footer />
    </>
  );
}

export default MyApp;
