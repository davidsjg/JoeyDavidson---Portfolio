import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";

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
  const dispatch = useDispatch();

  useEffect(() => {
    API.getProjects().then((project) => {
      console.log(project);
    });
  }, []);

  function handleClick(e) {
    e.preventDefault();
    // const newProj = userInput.current.value;

    // localCount = localCount + 1;

    // dispatch(setProject(newProj));
  }

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
