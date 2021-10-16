import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProjectCard(props) {
  return (
    <Card style={{ width: "18rem" }} className={`${props.cName} .mx-auto`}>
      <Card.Img variant="top" src="https://i.imgur.com/FwYTuY3.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
