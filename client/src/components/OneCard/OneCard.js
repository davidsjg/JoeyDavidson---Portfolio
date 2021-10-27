import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Link from "react-bootstrap/NavLink";

import image1 from "./IMG_6490.JPG";
import styles from "./OneCard.module.css";

import HomeContext from "../../utils/HomeContext";

export default function OneCard(props) {
  const { dataArr } = useContext(HomeContext);
  const project = useSelector((state) => state.project);

  let aboutMe;
  let colSize = 0;
  let colSize2 = 0;
  let projects;
  let contact;
  let home;
  let width;
  let temp = false;

  useEffect(() => {
    setLake();
  }, []);

  function setLake(lake) {
    console.log(props);
  }

  let page = props.page;

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

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

          {aboutMe === true ? (
            <Col sm={colSize2} className="aboutMeCol">
              <div className={styles["aboutMeDiv"]}>
                <h2>WELCOME!</h2>
                <h4>Thank you for visiting my page! </h4>
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
                  Avalanche fan and also love to play guitar.
                </h6>
              </div>
            </Col>
          ) : (
            <span />
          )}
          {/* if HOME IS SENT */}
          {home === true ? (
            <Col sm={colSize2}>
              <Link
                // onClick={handleClick}
                // aria-controls="example-collapse-text"
                // aria-expanded={open}
                // variant="secondary"
                style={{ color: "black" }}
                className={styles["navBack"]}
                className="navLink2"
                value={props.project.title}
                // className={styles["navLink"]}
                href={props.project.link}
              >
                {props.project.title}
              </Link>
            </Col>
          ) : (
            <span />
          )}
          {projects === true ? (
            <Col sm={colSize2}>
              <Link
                // onClick={handleClick}
                // aria-controls="example-collapse-text"
                // aria-expanded={open}
                // variant="secondary"
                style={{ color: "black" }}
                className={styles["navBack"]}
                className="navLink2"
                value={props.project.title}
                // className={styles["navLink"]}
                href={props.project.link}
              >
                {props.project.title}
              </Link>
            </Col>
          ) : (
            <span />
          )}
          {/* {home === true ? (
          <Col sm={colSize2}>
            <CardCollapse2 />
          </Col>
        ) : (
          <span />
        )} */}
        </Row>
        {/* </Card> */}
      </Container>
    </>
  );
}
