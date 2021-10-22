import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import image1 from "./IMG_6490.JPG";
import styles from "./PageCard.module.css";
import DataCard from "../DataCard/DataCard";

export default function PageCard() {
  return (
    <Container>
      <Row className={styles["mainRow"]}>
        <Container className={styles["mainContain"]}>
          <Row className={styles["subRow"]}>
            <Col sm={4} className={styles["picCol"]}>
              <Image src={image1} className={styles["mainImg"]} />
            </Col>
            <Col sm={8} className={styles["dataCol"]}>
              <DataCard cname="dCard" />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
