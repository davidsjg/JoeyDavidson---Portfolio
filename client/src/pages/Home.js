import React, { useState } from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//CSS
import styles from "./Home.module.css";
//Components

import OneCard from "../components/OneCard/OneCard";
import LogoBanner from "../components/LogoBanner/LogoBanner";
//Images
import image1 from "./fish2.PNG";
import image2 from "./fish1.PNG";
import image3 from "./fish7.PNG";
// import image4 from "./JD_Image.png";

import HomeContext from "../utils/HomeContext";

export default function Home() {
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
  const [homeState, setHomeState] = useState({
    dataArr: tempArr,
    currProject: {},
  });

  function setHomeProject(currProject) {
    let dataArr = tempArr;

    // setHomeState(dataArr, currProject);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(homeState);
  }
  function handleClick2(e) {
    e.preventDefault();
  }

  console.log(homeState);

  return (
    <HomeContext.Provider value={homeState}>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <Container className={styles["mainContain"]}>
        <Row className={styles["bannerRow"]}>
          <LogoBanner />
        </Row>
        <Row>
          {homeState.dataArr.map((project, index) => {
            let tempProj = tempArr[index];
            return (
              <Col key={project.id} className={styles["colProj"]} sm={4}>
                <OneCard
                  page={"home"}
                  setHomeProject={setHomeProject}
                  curProj={tempProj}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </HomeContext.Provider>
  );
}
