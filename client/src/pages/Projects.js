import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//CSS
import styles from "./Home.module.css";
//Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import API from "../utils/API";
//Images
import image1 from "./fish2.PNG";
import image2 from "./fish3.jpg";
import image3 from "./fish7.PNG";
import image4 from "./JD_Image.png";

export default function Projects() {
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
  function handleClick2(e) {
    e.preventDefault();
  }

  let tempArr = [
    {
      title: "Contact Me",
      data: "Click to contact me!",
      img: image1,
      link: "/contact",
    },
    {
      title: "About Me",
      data: "Click to learn more about me!",
      img: image2,
      link: "/about",
    },
    {
      title: "Portolio Page",
      data: "Click to view my portfolio page!",
      img: image3,
      link: "/projects",
    },
  ];

  return (
    <>
      {/* <button onClick={handleClick}>CLICK ME</button> */}
      <Container className={styles["mainContain"]}>
        <Row className={styles["bannerRow"]}>
          <Col
            sm={12}
            className="d-flex justify-content-center"
            className={styles["bannerCol"]}
          >
            <Image className={styles["bannerImg"]} src={image4} thumbnail />
            {/* <h1 className="pageHeader">Joey Davidson Portfolio Page</h1> */}
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
        </Row>
      </Container>
    </>
  );
}
