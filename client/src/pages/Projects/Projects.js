import React, { useState } from "react";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//CSS
// import styles from "./Projects.scss";
//Components
import FlipCard from "../../components/FlipCard/FlipCard";
import OneCard from "../../components/OneCard/OneCard";
import LogoBanner from "../../components/LogoBanner/LogoBanner";
//Images
import image1 from "./fish2.PNG";
import image2 from "./fish1.PNG";
import image3 from "./fish7.PNG";
// import image4 from "./JD_Image.png";

import HomeContext from "../../utils/HomeContext";

import "./Projects.scss";

export default function Projects() {
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

  const cards = [
    {
      id: "1",
      variant: "hover",
      front: "Hover",
      back: "Back",
    },
    {
      id: "2",
      variant: "click",
      front: "Click",
      back: "Back",
    },
    {
      id: "3",
      variant: "focus",
      front: "Focus",
      back: "Back",
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

  return (
    <HomeContext.Provider value={homeState}>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <Container className="mainContain">
        <Row className="bannerRow">
          <LogoBanner />
        </Row>
        <div className="container">
          <div className="row h-100">
            <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center cardFlip">
              {cards.map((card) => (
                <FlipCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </HomeContext.Provider>
  );
}
