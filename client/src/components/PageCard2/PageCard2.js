import React from "react";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import image1 from "./fish5.jpg";
import styles from "./PageCard2.module.css";
import DataCard2 from "../DataCard2/DataCard2";

export default function PageCard2() {
  return (
    <Container>
      <Row className={styles["mainRow"]}>
        <Container className={styles["mainContain"]}>
          <Row className={styles["subRow"]}>
            <Col sm={4} className={styles["picCol"]}>
              <Image
                src={image1}
                // className="img-fluid"
                className={styles["mainImg"]}
              />
            </Col>
            <Col sm={8} className={styles["dataCol"]}>
              <Row>
                <Col sm={1}></Col>
                <Col sm={10}> </Col>
                <Col sm={1}></Col>
              </Row>
              <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                  <DataCard2 />
                </Col>
                <Col sm={1}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
