import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import PageCard2 from "../components/PageCard2/PageCard2";
import OneCard from "../components/OneCard/OneCard";

export default function AboutMe() {
  const project = useSelector((state) => state.project);
  const userInput = useRef();
  const dispatch = useDispatch();
  let localCount = 0;

  function handleClick(e) {
    e.preventDefault();
    const newProj = userInput.current.value;

    localCount = localCount + 1;

    dispatch(setProject(newProj));
  }

  return (
    <>
      <OneCard page={"contact"} />
      {/* <button onClick={handleClick}>Update Project!</button> */}
    </>
  );
}
