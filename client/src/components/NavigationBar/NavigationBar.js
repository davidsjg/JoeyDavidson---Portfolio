import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <>
      <Navbar bg="light">
        <Container style={{ backgroundColor: "lightgrey", borderRadius: 5 }}>
          <Navbar.Brand href="/">Joey Davidson</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/projects">My Projects</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav> */}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={{ color: "black" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} href="/about">
              About Me
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} href="/projects">
              My Projects
            </Nav.Link>
            <Nav.Link style={{ color: "black" }} href="/contact">
              Contact Me
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
