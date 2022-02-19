import React from "react";
import {Button, Container, Col, Row, Nav, Navbar} from "react-bootstrap";
import {TiShoppingCart} from "react-icons/all"
import LogoSparks from "../../assets/images/logo_image/LogoSparks.webp";
import {Link} from "react-router-dom";

const LogoNavBar: React.FC = () => {
  return (
      <Container fluid={true}>
        <Row className='logo-nav-bar'>
          <Navbar className="logo-nav-bar border-bottom px-0 py-2 ps-4">
            <Col sm={10}>
              <Navbar.Brand>
                <Link to="/">
                  <img src={LogoSparks} className="align-content-md-start" height="40px" width="auto" alt="Logo"/>
                </Link>
              </Navbar.Brand>
            </Col>
            <Col sm={.5}>
              <Nav.Link>
                <TiShoppingCart className='cart-icon'/>
                <p className='cart-quantity'>2</p>
              </Nav.Link>
            </Col>
            <Col sm={1.5}>
              <Nav.Link>
                <Link to="/checkout">
                  <Button className="checkout-btn font-monospace">Check out</Button>
                </Link>
              </Nav.Link>
            </Col>
          </Navbar>
        </Row>

      </Container>
  );
}

export default LogoNavBar;