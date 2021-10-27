import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import OneCard from "../components/OneCard/OneCard";

import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import styles from "./Contact.module.css";
import image1 from "./fish1.PNG";
import LogoBanner from "../components/LogoBanner/LogoBanner";

export default function Contact() {
  let project = {
    title: "Contact Me",
    data: "Click to contact me!",
    img: image1,
    link: "/contact",
  };

  return (
    <>
      <Container className={styles["mainContain"]}>
        <Row className={styles["bannerRow"]}>
          <LogoBanner />
        </Row>
        <OneCard page="aboutMe" project={project} />
      </Container>
    </>
  );
}
