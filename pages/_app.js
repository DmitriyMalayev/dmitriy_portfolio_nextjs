/* eslint-disable react/prop-types */
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "../styles/globals.css";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SocialMedia from "../Components/SocialMedia";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Lf4d3QhAAAAAG59kvaq1CKxsIjvcx-HQXQtsvfg"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <Navbar />
      <SocialMedia />
      <Component {...pageProps} />

      <Footer />
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
