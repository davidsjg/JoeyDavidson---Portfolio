import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function NavigationBar() {
  return (
    <>
      <Navbar bg="light">
        <Container
          style={{
            backgroundColor: "lightgrey",
            borderRadius: 5,
          }}
        >
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Copyright Joey Davidson, 2021</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
