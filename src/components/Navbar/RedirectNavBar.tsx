import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const RedirectNavBar: React.FC = () => {
  return (
    <div>
      <Navbar
        className="top-navbar"
        variant="light"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown
              title="Categories"
              className="categories border 2px solid"
            >
              <NavDropdown.Item href="#categories/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#categories/coffee">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item href="#categories/chocolate">
                Chocolate
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default RedirectNavBar;
