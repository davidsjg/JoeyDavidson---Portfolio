import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import PageCard2 from "../components/PageCard2/PageCard2";
import OneCard from "../components/OneCard/OneCard";
import { Container } from "react-bootstrap";
import styles from "./Contact.module.css";

export default function AboutMe() {
  const project = useSelector((state) => state.project);
  const userInput = useRef();
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    const newProj = userInput.current.value;

    dispatch(setProject(newProj));
  }

  return (
    <>
      <Container className={styles["mainContain"]}>
        <OneCard page="contact" />
      </Container>
      {/* <button onClick={handleClick}>Update Project!</button> */}
    </>
  );
}
