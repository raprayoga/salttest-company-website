import React from "react";
import LogoBrand from "assets/image/brand.png";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={LogoBrand} alt="Logo Brand" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link
                className="rounded-3 px-2"
                href="#action1"
                style={{ backgroundColor: "#d2d2d2" }}
              >
                Home
              </Nav.Link>
              <Nav.Link className="rounded-3 px-2" href="#action2">
                About Us
              </Nav.Link>
              <Nav.Link className="rounded-3 px-2" href="#">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
