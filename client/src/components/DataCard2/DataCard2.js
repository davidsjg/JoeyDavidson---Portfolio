import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import styles from "./DataCard2.module.css";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { send } from "emailjs-com";
import { init } from "emailjs-com";
init("user_HTcdS3U6s5IFjdiYFuFJt");

export default function DataCard2(props) {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    useMess: "",
    reply_to: "",
  });

  const userName = useRef();
  const userEmail = useRef();
  const userMessage = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    let curUser = userName.current.value;
    let curEmail = userEmail.current.value;
    let curMessage = userMessage.current.value;

    {
      if (curUser === "" || curEmail === "" || curMessage === "") {
        return alert("Please fill in all input fields.");
      } else {
        console.log("all input fields good to go");
      }
    }

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
        <br />
        <h4>Feel free to send me an email with questions or comments.</h4>
        <br />
        <Form onSubmit={onSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="YourName"
              aria-label="YourName"
              aria-describedby="basic-addon1"
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
              ref={userName}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Your Email Address"
              aria-label="YourEmail"
              aria-describedby="basic-addon1"
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
              ref={userEmail}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              as="textarea"
              placeholder="Your Message"
              aria-label="YourMessage"
              aria-describedby="basic-addon1"
              name="useMess"
              value={toSend.useMess}
              onChange={handleChange}
              ref={userMessage}
            />
          </InputGroup>
          <Button type="submit" variant="secondary">
            Submit
          </Button>
          <span className={styles["span"]}>
            {""}
            (An email will be sent directly to me)
          </span>
        </Form>
      </Card.Body>
    </Card>
  );
}
