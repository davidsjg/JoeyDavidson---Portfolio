import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";

export default function AboutMe() {
  const project = useSelector((state) => state.project);
  const userInput = useRef();
  const dispatch = useDispatch();
  let localCount = 0;

  console.log(project);

  function handleClick(e) {
    e.preventDefault();
    const newProj = userInput.current.value;

    localCount = localCount + 1;

    dispatch(setProject(newProj));
  }

  return (
    <>
      <h5>CURRENT PROJECT </h5>
      <h6>{project.project}</h6>
      {/* <h6>Count: {project[1].count}</h6> */}
      <input ref={userInput}></input>
      <button onClick={handleClick}>Update Project!</button>
    </>
  );
}
