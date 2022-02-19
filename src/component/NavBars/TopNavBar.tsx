import React from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {FaTruck, IoCallSharp} from "react-icons/all";

const TopNavBar: React.FC = () => {
    return (
        <Container fluid={true}>
            <Navbar className="top-nav-bar border-bottom justify-content-end" expand="sm">
                <Navbar.Toggle aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle" className="justify-content-end align-items-center">
                    <Nav className="nav-links px-lg-3">
                        <Nav.Link>
                            <FaTruck className="me-2"/>
                            Delivery Areas
                        </Nav.Link>
                        <Nav.Link className="phone-number">
                            <IoCallSharp className="me-2"/>
                            +94 112 123 456
                        </Nav.Link>
                        <Nav.Link><Button className="navbar-button">Register</Button></Nav.Link>
                        <Nav.Link><Button className="navbar-button border-0">Login</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default TopNavBar;