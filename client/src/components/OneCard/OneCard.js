import React, { useContext, useEffect, useState, useRef } from "react";
import { browserHistory } from "react-router";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Home from "../../pages/Home/Home";

import useRoute from "../useRoute/useRoute";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Link from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import image1 from "./IMG_6490.JPG";
import styles from "./OneCard.module.css";

import HomeContext from "../../utils/HomeContext";

import { send } from "emailjs-com";
import { init } from "emailjs-com";
init("user_HTcdS3U6s5IFjdiYFuFJt");

export default function OneCard(props) {
  const { dataArr } = useContext(HomeContext);
  const project = useSelector((state) => state.project);

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    useMess: "",
    reply_to: "",
  });

  let userName = useRef();
  let userEmail = useRef();
  let userMessage = useRef();

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

    alert("Email sent succesfully!");
    return <Redirect from="/contact" to="/home" />;
  };

  function navigateHome() {
    console.log("inNavigateHome on OneCard, should be redirecting next");
    return <Redirect to="/home" />;
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  let colSize = 0;
  let colSize2 = 0;
  let projects;
  let home;
  let aboutMe;
  let contact;
  let width;
  let temp = false;

  useEffect(() => {
    setLake();
  }, []);

  function setLake(lake) {
    console.log(props);
  }

  let page = props.page;

  switch (props.page) {
    case "aboutMe":
      colSize = 4;
      colSize2 = 8;
      aboutMe = true;
      width = "100%";
      break;
    case "contact":
      colSize = 4;
      colSize2 = 8;
      contact = true;
      width = "100%";
      break;
    case "home":
      colSize = 12;
      colSize2 = 12;
      home = true;
      width = "18rem";
      break;
    case "projects":
      colSize = 12;
      colSize2 = 12;
      projects = true;
      width = "18rem";
      break;

    default:
      colSize = 12;
      colSize2 = 12 - colSize;
      break;
  }

  return (
    <>
      <Container style={{ width }}>
        {/* <Card> */}
        <Row>
          <Col
            sm={colSize}
            className={styles["cardImg"]}
            // style={{ backgroundColor: "red" }}
          >
            <Image
              src={props.project.img}
              // className="img-fluid"
              className={styles[`${page}`]}
            />
          </Col>
          {/* IF ABOUT ME IS SENT */}
          {aboutMe === true && (
            <Col sm={colSize2} className="aboutMeCol">
              <div className={styles["aboutMeDiv"]}>
                <h2>WELCOME!</h2>
                <br />
                <h4>Thank you for visiting my page! </h4>
                <br />
                <br />
                <h6>
                  I started programming in JavaScript at the beginning of 2021.
                  I have programmed with Pascal, Visual Basic, C++ and Java in
                  high school and college.
                </h6>
                <br />
                <h6>
                  I was born and raised in Colorado. I love everything outdoors,
                  especially hiking to fish and camp. I'm an avid Colorado
                  Avalanche fan and love to play guitar.
                </h6>
              </div>
            </Col>
          )}
          {contact === true && (
            <Col sm={colSize2} className="aboutMeCol">
              <h2>Drop me a line....</h2>
              <h4>Feel free to send me an email with questions or comments:</h4>
              <br />
              <Form
                // onSubmit={() => {
                //   return <Redirect to="/home" />;
                // }}
                onSubmit={onSubmit}
              >
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
                <Button type="submit" variant="secondary" action={"/home"}>
                  Submit
                </Button>
              </Form>
            </Col>
          )}

          {/* if HOME IS SENT */}
          {home === true ? (
            <Col sm={colSize2}>
              <Link
                style={{ color: "black" }}
                className={styles["navBack"]}
                className="navLink2"
                value={props.project.title}
                href={props.project.link}
              >
                {props.project.title}
              </Link>
            </Col>
          ) : (
            <span />
          )}
          {/* IF PROJECTS IS SENT */}
          {projects === true ? (
            <Col sm={colSize2}>
              <Link
                style={{ color: "black" }}
                className={styles["navBack"]}
                className="navLink2"
                value={props.project.title}
                href={props.project.link}
              >
                {props.project.title}
              </Link>
            </Col>
          ) : (
            <span />
          )}
        </Row>
      </Container>
    </>
  );
}
