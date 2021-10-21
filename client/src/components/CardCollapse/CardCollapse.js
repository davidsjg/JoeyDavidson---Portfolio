import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { setProject } from "../../actions";

export default function CardCollapse() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project);

  console.log(project);

  function handleClick(e) {
    e.preventDefault();
    console.log(e.target.value);
    let tempProj = e.target.value;

    setOpen(!open);

    dispatch(setProject(tempProj));
  }

  return (
    <>
      <Button
        onClick={handleClick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="secondary"
        value="project1"
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
}
