import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import PageCard2 from "../components/PageCard2/PageCard2";
import OneCard from "../components/OneCard/OneCard";
import { Container } from "react-bootstrap";
import styles from "./Contact.module.css";
import image1 from "./IMG_5307.JPG";

export default function AboutMe() {
  let project = {
    title: "Contact Me",
    data: "Click to contact me!",
    img: image1,
    link: "/contact",
  };

  return (
    <>
      <Container className={styles["mainContain"]}>
        <OneCard page="contact" project={project} />
      </Container>
      {/* <button onClick={handleClick}>Update Project!</button> */}
    </>
  );
}
