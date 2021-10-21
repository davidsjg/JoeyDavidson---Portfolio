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
  const project = useSelector((state) => state.project);

  console.log(project.project);

  function handleClick(e) {
    e.preventDefault();
    // const newProj = userInput.current.value;
    console.log(project.project[0]);

    // localCount = localCount + 1;

    // dispatch(setProject(newProj));
  }

  let tempArr = [
    {
      title: "About Me",
      data: "Born in Colorado, I grew up with an affinity to the outdoors.  Fishing...",
      img: "https://imgur.com/0rx1Hwy",
    },
    {
      title: "Contact Me",
      data: "Click here to contact me!",
      img: "https://imgur.com/0rx1Hwy",
    },
    {
      title: "Portolio Page",
      data: "Want to see my sick projects?",
      img: "https://imgur.com/0rx1Hwy",
    },
  ];

  return (
    <>
      <button onClick={handleClick}>CLICK ME</button>
      <Container className={styles["mainContain"]}>
        <Row>
          <Col sm={12} className="d-flex justify-content-center">
            <h1 className="pageHeader">Joey Davidson Portfolio Page</h1>
          </Col>
        </Row>
        <Row>
          {tempArr.map((project, index) => {
            return (
              <Col key={project.id} className={styles["colProj"]} sm={4}>
                <ProjectCard
                  key={index}
                  cname="projectCard"
                  project={project}
                />
              </Col>
            );
          })}
          {/* <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cname="projectCard" />
          </Col> */}
          {/* <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cname="projectCard" project1={project.project[0]} />
          </Col>
          <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cname="projectCard" />
          </Col>
          <Col className={styles["colProj"]} sm={4}>
            <ProjectCard cname="projectCard" />
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
