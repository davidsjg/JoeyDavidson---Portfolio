import React from "react";
import { useSelector } from "react-redux";

export default function AboutMe() {
  const project = useSelector((state) => state.project);
  return (
    <>
      <h5>CURRENT PROJECT </h5>
      <h6>{project}</h6>
    </>
  );
}
