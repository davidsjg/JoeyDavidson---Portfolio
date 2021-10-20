import React from "react";

function Contain(props) {
  return (
    <div cname={`${props.contain} container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}

export default Contain;
