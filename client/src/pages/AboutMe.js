import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import OneCard from "../components/OneCard/OneCard";
import PageCard from "../components/PageCard/PageCard";
import { Container } from "react-bootstrap";
import styles from "./AboutMe.module.css";
import image1 from "./IMG_8019.JPG";

export default function AboutMe() {
  const aboutMe = "aboutMe";

  let project = {
    title: "Contact Me",
    data: "Click to contact me!",
    img: image1,
    link: "/contact",
  };

  return (
    <>
      <Container className={styles["mainContain"]}>
        <OneCard page="aboutMe" project={project} />
      </Container>
    </>
  );
}
