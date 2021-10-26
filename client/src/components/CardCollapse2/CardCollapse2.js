import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { setProject } from "../../actions";
import Nav from "react-bootstrap/Nav";
import styles from "./CardCollapse2.module.css";

export default function CardCollapse2(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  function handleClick(e) {
    e.preventDefault();
    let tempProj = e.target.value;
    setOpen(!open);
    dispatch(setProject(tempProj));
  }

  function handleClick2(e) {
    e.preventDefault();
    let tempProj = e.target.value;
    console.log(tempProj);
  }

  return (
    <div className={styles["outerNav"]}>
      <Nav.Link
        onClick={handleClick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="secondary"
        style={{ color: "black" }}
        className={styles["navBack"]}
        // value={selectedProject.data}
        // className={styles["navLink"]}
      >
        Explore!
      </Nav.Link>
      <Collapse in={open}>
        <div id="example-collapse-text">
          SUP DOG
          <br />
          <a href={"/home"}>Explore More!</a>
        </div>
      </Collapse>
    </div>
  );
}
