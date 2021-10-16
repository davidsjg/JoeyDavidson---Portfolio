import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import styles from "./Home.module.css";

//Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function Home() {
  return (
    <>
      <Container className={styles["mainContain"]}>
        <Row>
          <Col sm={12}>Header</Col>
        </Row>
        <Row>
          <Col
            className="d-flex justify-content-center"
            className={styles["colProj"]}
            sm={4}
          >
            <ProjectCard cName="projectCard" />
          </Col>
          <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cName="projectCard" />
          </Col>
          <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cName="projectCard" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
