import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cn from "classnames";
import styles from "./FlipCard.css";
import { Container } from "react-bootstrap";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  return (
    <>
      <div
        tabIndex={card.id}
        className={cn("flip-card-outer", {
          "focus-trigger": card.variant === "focus",
        })}
        onClick={handleClick}
      >
        <div
          className={cn("card front", {
            carShareTitle: card.class === "CarShare",
            jpwTitle: card.class === "JPW",
            beaverTitle: card.class === "BeaverFrames",
          })}
        >
          {card.title}
        </div>
        <div
          className={cn("flip-card-inner", {
            showBack,
          })}
        >
          <div
            className={cn("card front", {
              carShare: card.class === "CarShare",
              JPW: card.class === "JPW",
              BeaverFrames: card.class === "BeaverFrames",
            })}
          >
            <div className="card-body flipCard d-flex justify-content-center align-items-center"></div>
          </div>
          <div
            className={cn("card back", {
              backBody1: card.class === "CarShare",
              backBody2: card.class === "JPW",
              backBody3: card.class === "BeaverFrames",
            })}
          >
            <Container className={"supYall"}>
              <div
                className={card.title}
                className="card-body flipCard d-flex justify-content-center align-items-center"
              >
                <div className="card-text ">
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <h8 className="card-text ">
                      <span style={{ fontWeight: "bold" }}>Title: </span>
                      {card.title}
                    </h8>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <h8 className="card-text ">
                      <span style={{ fontWeight: "bold" }}>Summary: </span>{" "}
                      {card.Summary}
                    </h8>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <h8 className="card-text ">
                      <span style={{ fontWeight: "bold" }}>Role: </span>
                      {card.Role}
                    </h8>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <h8 className="card-text ">
                      <span style={{ fontWeight: "bold" }}>Tools: </span>
                      {card.Tools}
                    </h8>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <p className="card-text ">
                      <span style={{ fontWeight: "bold" }}>
                        Github Repository:{" "}
                      </span>{" "}
                      <a href={card.github} target="_blank">
                        Github Repository
                      </a>
                    </p>
                  </div>
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <p className="card-text ">
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        Deployed Live Site:{" "}
                      </span>{" "}
                      <a href={card.github}>Deployed Site</a>
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipCard;
