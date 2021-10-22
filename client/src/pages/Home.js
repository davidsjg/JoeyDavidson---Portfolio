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
//Images
import image1 from "./IMG_5307.JPG";
import image2 from "./IMG_6077.JPG";
import image3 from "./IMG_8019.JPG";

export default function Home() {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  let allProjects = project.project;

  function handleClick(e) {
    e.preventDefault();
    // const newProj = userInput.current.value;
    console.log(project.project[0]);

    // localCount = localCount + 1;

    // dispatch(setProject(newProj));
  }

  let tempArr = [
    {
      title: "Contact Me",
      data: "Click here to contact me!",
      img: image1,
    },
    {
      title: "About Me",
      data: "Born in Colorado, I grew up with an affinity for the outdoors.  Click here to read more about me!",
      img: image2,
    },
    {
      title: "Portolio Page",
      data: "Click here to see my projects!",
      img: image3,
    },
  ];

  return (
    <>
      {/* <button onClick={handleClick}>CLICK ME</button> */}
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

          {/* {tempArr.length > 0 &&
            allProjects.map((project, index) => {
              return (
                <Col key={project.id} className={styles["colProj"]} sm={4}>
                  <ProjectCard
                    key={index}
                    cname="projectCard"
                    project={project}
                  />
                </Col>
              );
            })} */}
        </Row>
      </Container>
    </>
  );
}
