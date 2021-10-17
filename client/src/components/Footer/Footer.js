import React from "react";
import Navbar from "react-bootstrap/Navbar";
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
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>Copyright Joey Davidson, 2021</Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <a
                href="mailto: j.davidson18@gmail.com"
                style={{ color: "grey" }}
              >
                Email Me
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
