import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//CSS
import styles from "./Home.module.css";

//Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function Home() {
  return (
    <>
      <Container className={styles["mainContain"]}>
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <h1 className="pageHeader">Joey Davidson Portfolio Page</h1>
            {/* <Image
              src="https://i.imgur.com/Z9dSBeY.png"
              style={{ height: 80, width: 300 }}
              rounded
            /> */}
          </Col>
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
