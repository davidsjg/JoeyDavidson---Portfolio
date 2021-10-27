import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { setProject } from "../../actions";
import Nav from "react-bootstrap/Nav";
import styles from "./CardCollapse2.module.css";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function CardCollapse2(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  console.log(props);
  let page = props.page;

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
        className={styles[`${page}`]}
        style={{ color: "black" }}
        className={styles["navBack"]}

        // value={selectedProject.data}
        // className={styles["navLink"]}
      >
        Explore!
      </Nav.Link>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <Col
            sm={12}
            className={styles["cardImg"]}

            // style={{ backgroundColor: "red" }}
          >
            <Image
              src={props.currProj.img}
              className="imgDrop"
              // className="img-fluid"

              // className="sup"
            />
          </Col>
          <br />
          <a href={"/home"}>Explore More!</a>
        </div>
      </Collapse>
    </div>
  );
}
