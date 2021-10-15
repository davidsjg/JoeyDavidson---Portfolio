import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Container>
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
