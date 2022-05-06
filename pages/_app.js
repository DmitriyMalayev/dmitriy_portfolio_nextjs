/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../styles/globals.css";

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
