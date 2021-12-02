import React from "react";
import {Button, Container,Col, Row, Nav, Navbar} from "react-bootstrap";
import {TiShoppingCart} from "react-icons/all"
import LogoSparks from "../assets/images/logo_image/LogoSparks.webp";

const LogoNavBar: React.FC = () => {
  return(
    <Container fluid={true}>

  <Row>
    <Navbar className="logo-nav-bar border-bottom px-0 py-2 ps-4" >
    <Col sm={10}>
      <Navbar.Brand>
      <img src={LogoSparks} className="align-content-md-start" height="40px" width="auto" alt="Logo"/>
    </Navbar.Brand>
    </Col>
    <Col sm={.5}>
            <Nav.Link>
              <TiShoppingCart className="shopping-cart px-0" />
            </Nav.Link>
    </Col>
    <Col sm={1.5}>
            <Nav.Link>
              <Button className="navbar-button">Check out</Button>
            </Nav.Link>
    </Col>
    </Navbar>
  </Row>

    </Container>
  );
}

export default LogoNavBar;