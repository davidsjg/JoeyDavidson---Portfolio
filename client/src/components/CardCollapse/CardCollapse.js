import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { setProject } from "../../actions";

export default function CardCollapse(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  console.log(props.props.project);

  let selectedProject = props.props.project;

  function handleClick(e) {
    e.preventDefault();
    let tempProj = e.target.value;
    setOpen(!open);
    dispatch(setProject(tempProj));
  }

  function handleClick2(e) {
    e.preventDefault();
    let tempProj = e.target.value;
    console.log(tempProj);
  }

  return (
    <>
      <Button
        onClick={handleClick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="secondary"
        value={selectedProject.data}
      >
        Explore!
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {selectedProject.data}
          <Button
            value={selectedProject.title}
            // onClick={handleClick2}
            variant="secondary"
            href={selectedProject.link}
          >
            Explore More!
          </Button>
        </div>
      </Collapse>
    </>
  );
}
