import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cn from "classnames";
import styles from "./FlipCard.css";

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
            <div
              className={card.title}
              className="card-body flipCard d-flex justify-content-center align-items-center"
            >
              <p className="card-text ">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <h8 className="card-text ">{card.title}</h8>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center">
                  <h8 className="card-text ">{card.Summary}</h8>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center">
                  <h8 className="card-text ">{card.Role}</h8>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center">
                  <h8 className="card-text ">{card.Tools}</h8>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="card-text ">
                    {" "}
                    <a href={card.github}>Github Repository</a>
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="card-text ">
                    {" "}
                    <a href={card.deploy}>Deployed Site</a>
                  </p>
                </div>
                {/* <h5>{card.title}</h5>
                <h5>{card.Summar}</h5>
                <h5>{card.Role}</h5>
                <h5>{card.Tools}</h5>
                <a href={card.github}>Github Repository</a>
                <a href={card.deploy}>Deployed Site</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipCard;
