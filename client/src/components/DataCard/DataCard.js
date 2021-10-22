import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import styles from "./DataCard.module.css";

export default function DataCard(props) {
  return (
    <Card className={props.cname}>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}
