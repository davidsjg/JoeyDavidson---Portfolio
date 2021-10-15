import React from "react";

function Contain(props) {
  return (
    <div
      className={`${props.mainContain} container${props.fluid ? "-fluid" : ""}`}
    >
      {props.children}
    </div>
  );
}

export default Contain;
