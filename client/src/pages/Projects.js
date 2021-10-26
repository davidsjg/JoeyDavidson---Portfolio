import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import OneCard from "../components/OneCard/OneCard";
import PageCard from "../components/PageCard/PageCard";

export default function Projects(props) {
  const project = useSelector((state) => state.project);
  const userInput = useRef();
  const dispatch = useDispatch();
  let localCount = 0;
  const aboutMe = "aboutMe";
  const projects = props.page;
  const home = "home";
  const contact = "contact";

  function handleClick(e) {
    e.preventDefault();
    const newProj = userInput.current.value;

    localCount = localCount + 1;

    dispatch(setProject(newProj));
  }

  return (
    <>
      <OneCard page={projects} />
      {/* <button onClick={handleClick}>Update Project!</button> */}
    </>
  );
}
