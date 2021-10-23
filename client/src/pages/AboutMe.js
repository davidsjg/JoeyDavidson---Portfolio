import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject } from "../actions";
import PageCard from "../components/PageCard/PageCard";

export default function Contact() {
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
      <PageCard />
      {/* <button onClick={handleClick}>Update Project!</button> */}
    </>
  );
}
