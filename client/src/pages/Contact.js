import React, { useState } from "react";
// import { service_8rx5ijd } from "emailjs-com";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
import PageCard2 from "../components/PageCard2/PageCard2";
init("user_HTcdS3U6s5IFjdiYFuFJt");

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_m4i6k16",
      "template_0otklia",
      toSend,
      "user_HTcdS3U6s5IFjdiYFuFJt"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageCard2 />
    </>
  );
}
