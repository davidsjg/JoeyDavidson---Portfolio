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
import image4 from "./CarShare.png";
import image5 from "./JPW.png";
import image6 from "./ComingSoon.png";
// import image4 from "./JD_Image.png";

import HomeContext from "../../utils/HomeContext";

import "./Projects.scss";

export default function Projects() {
  const cards = [
    {
      id: "1",
      variant: "click",

      Summary:
        "App where users rent and post vehicles for rent within a community",
      Role: "Created front-end",
      Tools: "JavaScript, HTML, CSS, Materialize, Handlebars ",
      https: "//github.com/CommunityCarShare",
      https: "//thawing-reaches-91071.herokuapp.com/",
      img: image4,
      class: "CarShare",
      title: "Community Car Share",
      github: "https://github.com/swhachey/community_car_share",
      deploy: "https://thawing-reaches-91071.herokuapp.com/",
    },
    {
      id: "2",
      variant: "click",
      img: image5,
      class: "JPW",
      title: "James Peak Wilderness Lake Finder",
      Summary:
        "App designed to visualize fish survey data released by Colorado Parks and Wildlife",
      Role: "Developed project from creation to completion (Full Stack)",
      Tools: "React, MongoDB, Context API, JavaScript, HTML, Bootstrap",
      github: "//github.com/davidsjg/JPW-Fishing-App",
      deploy: "//fathomless-crag-56888.herokuapp.com/",
    },
    {
      id: "3",
      variant: "click",
      Summary: "App for Beaver Frames framing studio - Vail, CO",
      img: image6,
      class: "BeaverFrames",
      title: "Beaver Frames",
      Role: "Developed project from creation to completion (Full Stack)",
      Tools: "React, MongoDB, Context API, JavaScript, HTML, Bootstrap",
      github: "//github.com/davidsjg/JPW-Fishing-App",
      deploy: "//fathomless-crag-56888.herokuapp.com/",
    },
  ];

  return (
    <>
      {/* <HomeContext.Provider value={homeState}> */}
      {/* <button onClick={handleClick}>Click Me</button> */}
      <Container className="mainContain">
        <Row className="bannerRow">
          <LogoBanner />
          <h8 style={{ textAlign: "center", backgroundColor: "f7f7f7" }}>
            Click each card for more information!
          </h8>
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
      {/* </HomeContext.Provider> */}
    </>
  );
}
