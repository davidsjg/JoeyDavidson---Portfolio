import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import OneCard from "../components/OneCard/OneCard";
import PageCard from "../components/PageCard/PageCard";
import { Container } from "react-bootstrap";
import styles from "./AboutMe.module.css";
import image1 from "./fish2.PNG";

export default function AboutMe() {
  const userInput = useRef();
  const dispatch = useDispatch();
  let localCount = 0;
  const aboutMe = "aboutMe";

  let curProj = {
    title: "Contact Me",
    data: "Click to contact me!",
    img: image1,
    link: "/contact",
  };

  function handleClick(e) {
    e.preventDefault();
    const newProj = userInput.current.value;

    localCount = localCount + 1;

    dispatch(setProject(newProj));
  }

  return (
    <>
      <Container className={styles["mainContain"]}>
        <OneCard page={aboutMe} curProj={curProj} />
      </Container>
    </>
  );
}
