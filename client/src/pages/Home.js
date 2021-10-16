import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import styles from "./Home.module.css";

export default function Home(props) {
  return (
    <>
      <Container contain="mainContain" className={styles["mainContain"]}>
        <Row>
          <Col sm={12}>Header</Col>
        </Row>
        <Row>
          <Col sm={4}>Proj1</Col>
          <Col sm={4}>Proj2</Col>
          <Col sm={4}>Proj3</Col>
        </Row>
      </Container>
    </>
  );
}
