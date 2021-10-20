import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";

export default function AboutMe() {
  const project = useSelector((state) => state.project);
  const userInput = useRef();
  const dispatch = useDispatch();

  console.log(project);

  function handleClick(e) {
    e.preventDefault();
    const newProj = userInput.current.value;

    console.log(newProj);
    dispatch(setProject(newProj));
  }

  return (
    <>
      <h5>CURRENT PROJECT </h5>
      <h6>{project[0].project}</h6>
      <input ref={userInput}></input>
      <button onClick={handleClick}>Update Project!</button>
    </>
  );
}
