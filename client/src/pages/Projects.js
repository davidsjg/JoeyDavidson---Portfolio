import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import OneCard from "../components/OneCard/OneCard";
import PageCard from "../components/PageCard/PageCard";
import image1 from "./fish2.PNG";
import image2 from "./fish3.jpg";
import image3 from "./fish7.PNG";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import styles from "./Projects.module.css";
import LogoBanner from "../components/LogoBanner/LogoBanner";

export default function Projects(props) {
  const project = useSelector((state) => state.project);
  const userInput = useRef();
  const dispatch = useDispatch();
  let localCount = 0;
  const aboutMe = "aboutMe";
  const projects = props.page;
  const home = "home";
  const contact = "contact";

  function handleClick(e) {
    e.preventDefault();
    const newProj = userInput.current.value;

    localCount = localCount + 1;

    dispatch(setProject(newProj));
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
        <Row className={styles["bannerRow"]}>
          {tempArr.map((project, index) => {
            return (
              <Col key={project.id} className={styles["colProj"]} sm={4}>
                <OneCard page={"projects"} />
                {/* <ProjectCard
                  key={index}
                  cname="projectCard"
                  project={project}
                /> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
