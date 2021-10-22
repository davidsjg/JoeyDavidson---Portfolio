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

  let selectedProject = props.project;
  console.log(selectedProject.img);

  return (
    <Card
      style={{ width: "18rem", backgroundColor: "lightgray" }}
      className={`${props.cname} .mx-auto`}
    >
      {selectedProject.img ? (
        <Card.Img variant="top" src={selectedProject.img} />
      ) : (
        <i className="fa fa-spinner fa-spin" aria-hidden="true" />
      )}

      {/* <Card.Img variant="top" src={selectedProject.img} /> */}
      <Card.Body>
        <Card.Title>{selectedProject.title}</Card.Title>
        <CardCollapse props={props} />
      </Card.Body>
    </Card>
  );
}

const mapStateToProps = function (state) {
  return {
    project1: state.project,
  };
};

export default connect(mapStateToProps)(ProjectCard);
