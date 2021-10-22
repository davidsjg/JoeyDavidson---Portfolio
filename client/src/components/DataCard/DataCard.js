import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import styles from "./DataCard.module.css";

export default function DataCard(props) {
  return (
    <Card className={props.cname}>
      <Card.Body>
        <h2>WELCOME!</h2>
        <h4>Thank you for visiting my page! </h4>
        <br />
        <h6>
          I started programming in JavaScript at the beginning of 2021. I have
          programmed with previous languages in high school and college such as
          Pascal, Visual Basic, C++, and Java.
        </h6>
        <br />
        <h6>
          I was born and raised in Colorado. I love everything outdoors,
          especially backpacking to fish and camp. I'm an avid Colorado
          Avalanche fan and also play guitar in a band.{" "}
        </h6>
        <i
          class="fab fa-linkedin-in"
          style={{ backgroundColor: "#0077b5", color: "white" }}
        >
          {" "}
        </i>{" "}
        <a
          href="https://www.linkedin.com/in/joey-davidson18/"
          target="_blank"
          style={{ color: "black", backgroundColor: "white" }}
        >
          <br />
          Connect on LinkedIn!
        </a>
        <br />
        <i class="fab fa-github">
          <br />
          <a
            href="https://github.com/davidsjg"
            target="_blank"
            style={{ color: "black", backgroundColor: "white" }}
          >
            Connect on Github!
          </a>
        </i>
        <br />
        <i class="fas fa-envelope-square">
          <br />
          <a
            href="mailto: j.davidson18@gmail.com"
            style={
              {
                //   color: "black",
                //   backgroundColor: "white",
                //   fontWeight: "0",
              }
            }
            className={styles["email"]}
          >
            {" "}
            Email Me!
          </a>
        </i>
      </Card.Body>
    </Card>
  );
}
