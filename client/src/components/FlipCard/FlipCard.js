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
          <div className="card back">
            <div
              className={card.title}
              className="card-body flipCard d-flex justify-content-center align-items-center"
            >
              <p className="card-text fs-1 fw-bold">{card.back}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlipCard;
