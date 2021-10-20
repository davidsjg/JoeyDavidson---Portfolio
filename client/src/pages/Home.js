import React, { useEffect } from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//CSS
import styles from "./Home.module.css";

//Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import API from "../utils/API";

export default function Home() {
  useEffect(() => {
    API.getProjects().then((project) => {
      console.log(project);
    });
  }, []);

  return (
    <>
      <Container className={styles["mainContain"]}>
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <h1 className="pageHeader">Joey Davidson Portfolio Page</h1>
          </Col>
        </Row>
        <Row>
          <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cname="projectCard" />
          </Col>
          <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cname="projectCard" />
          </Col>
          <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cname="projectCard" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
