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
import OneCard from "../components/OneCard/OneCard";
import LogoBanner from "../components/LogoBanner/LogoBanner";
//Images
import image1 from "./fish2.PNG";
import image2 from "./fish3.jpg";
import image3 from "./fish7.PNG";
// import image4 from "./JD_Image.png";

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
      <Container className={styles["mainContain"]}>
        <Row className={styles["bannerRow"]}>
          <LogoBanner />
        </Row>
        <Row>
          {tempArr.map((project, index) => {
            return (
              <Col key={project.id} className={styles["colProj"]} sm={4}>
                <OneCard page={"home"} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
