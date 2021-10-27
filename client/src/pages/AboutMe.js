import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import OneCard from "../components/OneCard/OneCard";
import PageCard from "../components/PageCard/PageCard";
import { Container } from "react-bootstrap";
import styles from "./AboutMe.module.css";

export default function Contact() {
  const project = useSelector((state) => state.project);
  const userInput = useRef();
  const dispatch = useDispatch();

  const aboutMe = "aboutMe";
  const projects = "projects";
  const home = "home";
  const contact = "contact";

  function handleClick(e) {
    e.preventDefault();
    const newProj = userInput.current.value;

    dispatch(setProject(newProj));
  }

  return (
    <>
      <Container className={styles["mainContain"]}>
        <OneCard page={aboutMe} />
      </Container>
    </>
  );
}
