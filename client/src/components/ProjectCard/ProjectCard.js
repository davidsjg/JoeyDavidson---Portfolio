import React from "react";
import Card from "react-bootstrap/Card";
import CardCollapse from "../CardCollapse/CardCollapse";
// import { setProject } from "../../actions";
// import { useSelector, useDispatch } from "react-redux";
//connect is a funciton that we use to bring back a higher order component
import { connect } from "react-redux";

function ProjectCard(props) {
  // const dispatch = useDispatch();
  // const project = useSelector((state) => state.project);

  let tempProj = props.project;

  // const allProjects = project.project;

  return (
    <Card
      style={{ width: "18rem", backgroundColor: "lightgray" }}
      className={`${props.cname} .mx-auto`}
    >
      <Card.Img variant="top" src="https://i.imgur.com/FwYTuY3.jpeg" />
      <Card.Body>
        <Card.Title>{tempProj.title}</Card.Title>
        <CardCollapse />
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = function (state) {
  console.log(state.project.project[0]);
  return {
    project1: state.project,
  };
};

export default connect(mapStateToProps)(ProjectCard);
