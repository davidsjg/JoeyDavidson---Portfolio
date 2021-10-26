import React, { useContext } from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import image1 from "./IMG_6490.JPG";
import styles from "./OneCard.module.css";
import DataCard from "../DataCard/DataCard";
import CardCollapse2 from "../CardCollapse2/CardCollapse2";
import HomeContext from "../../utils/HomeContext";

export default function OneCard(props) {
  const { dataArr } = useContext(HomeContext);

  console.log(dataArr);

  let aboutMe;
  let colSize = 0;
  let colSize2 = 0;
  let projects;
  let contact;
  let home;
  let width;

  console.log(props);

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
    <Container style={{ width }}>
      {/* <Card> */}
      <Row>
        <Col
          sm={colSize}
          className={styles["cardImg"]}
          // style={{ backgroundColor: "red" }}
        >
          <Image
            src={image1}
            // className="img-fluid"
            className={styles[`${page}`]}
          />
        </Col>

        {aboutMe === true ? <Col sm={colSize2}>Data</Col> : <span />}
        {projects === true ? (
          <Col sm={colSize2}>
            <CardCollapse2 />
          </Col>
        ) : (
          <span />
        )}
        {home === true ? (
          <Col sm={colSize2}>
            <CardCollapse2 />
          </Col>
        ) : (
          <span />
        )}
      </Row>
      {/* </Card> */}
    </Container>
  );
}
