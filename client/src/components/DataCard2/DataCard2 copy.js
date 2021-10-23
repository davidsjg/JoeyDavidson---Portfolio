import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import styles from "./DataCard2.module.css";
import Input from "react-bootstrap/Input";

import { send } from "emailjs-com";
import { init } from "emailjs-com";
init("user_HTcdS3U6s5IFjdiYFuFJt");

export default function DataCard2(props) {
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
    <Card className={props.cname}>
      <Card.Body>
        <h2>Drop me a line....</h2>
        <h4>Feel free to send me an email with questions or comments:</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            placeholder="from name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="to_name"
            placeholder="to name"
            value={toSend.to_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </Card.Body>
    </Card>
  );
}
