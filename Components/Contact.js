import React from "react";
import { useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSumitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
        console.log(gReCaptchaToken, "response Google reCaptcha server");
        submitEnquiryForm(gReCaptchaToken);
      });
    },
    [executeRecaptcha]
  );
  const submitEnquiryForm = (gReCaptchaToken) => {
    fetch("/api/enquiry", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        website: website,
        linkedin: linkedin,
        message: message,
        gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "response from backend");
        if (res?.status === "success") {
          setNotification(res?.message);
        } else {
          setNotification(res?.message);
        }
      });
  };

  return (
    <section id="contact" className="lg:pt-0 text-slate-200 mx-auto sm:px-2">
      <div className="flex flex-col justify-center items-center w-full ">
        <form
          method="POST"
          action="https://getform.io/f/a30d9116-d1d7-44e9-9b87-1b526592e428"
          className="flex flex-col max-w-[600px] w-full border-8 p-8 pb-6 text-xl"
          onSubmit={handleSumitForm}
        >
          <div className="pb-8">
            <p className="text-slate-200 py-4 sm:text-lg md:text-xl">
              Submit The Form Below <br /> or Send Me An Email. {/*  */}
              <a
                href="mailto:dmitriy.malayev@gmail.com"
                className="text-blue-200 underline"
              >
                dmitriy.malayev@gmail.com
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 ">
            <input
              className="p-2 w-full custom-ring rounded-lg"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e?.target?.value)}
            />
            <input
              className=" p-2 w-full custom-ring rounded-lg"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
            />
            <input
              className=" p-2 w-full custom-ring rounded-lg"
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e?.target?.value)}
            />
            <input
              className=" p-2 w-full custom-ring rounded-lg"
              type="text"
              placeholder="LinkedIn"
              name="linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e?.target?.value)}
            />
            <textarea
              className="p-2 w-full sm:col-span-2 custom-ring rounded-lg"
              name="message"
              row="10"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e?.target?.value)}
            ></textarea>
          </div>

          <button className="bg-slate-800 hover:blue-500 hover:bg-orange-600 px-8 py-4 my-8 mx-auto flex items-center outline-none font-dance w-full sm:w-auto justify-center">
            Lets Collaberate
          </button>
          <div>{notification && <p>{notification}</p>}</div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
