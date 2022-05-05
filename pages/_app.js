/* eslint-disable react/prop-types */
import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
