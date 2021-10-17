import React from "react";
import Card from "react-bootstrap/Card";
import CardCollapse from "../CardCollapse/CardCollapse";

export default function ProjectCard(props) {
  return (
    <Card
      style={{ width: "18rem", backgroundColor: "lightgray" }}
      className={`${props.cName} .mx-auto`}
    >
      <Card.Img variant="top" src="https://i.imgur.com/FwYTuY3.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <CardCollapse />
      </Card.Body>
    </Card>
  );
}
