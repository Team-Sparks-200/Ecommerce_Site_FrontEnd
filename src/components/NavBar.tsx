import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Container fluid={true}>
      <Navbar className="nav-bar px-0 py-3 border-bottom" expand="sm">
        <NavDropdown
          title="Categories"
          id="basic-nav-dropdown"
          className="nav-bar-dropdown mr-md-4 ml-md-4 px-1"
        >
          <NavDropdown.Item onClick={() => alert("/home/All")}>
            {" "}
            All{" "}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => alert("/home/Grocery")}>
            {" "}
            Grocery{" "}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => alert("/home/Pharmacy")}>
            {" "}
            Pharmacy{" "}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => alert("/home/Food")}>
            {" "}
            Food{" "}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => alert("/home/Electronic")}>
            {" "}
            Electronic{" "}
          </NavDropdown.Item>
        </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="bottom-nav-collapse">
          <Nav className="nav-links mr-auto ">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>FAQ</Nav.Link>
            <Nav.Link>About us</Nav.Link>
            <Nav.Link>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
