import React from "react";

function Contain(props) {
  console.log(props);
  return (
    <div cName={`${props.contain} container${props.fluid ? "-fluid" : ""}`}>
      {props.children}
    </div>
  );
}

export default Contain;
