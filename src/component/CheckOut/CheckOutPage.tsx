import React from 'react';
import TopNavBar from "../NavBars/TopNavBar";
import {Col, Container, Row} from "react-bootstrap";
import CheckOutItem from "./CheckOutItem";
import LogoNavBar from "../NavBars/LogoNavBar";

const CheckOutPage: React.FC = () => {
  return (
      <React.Fragment>
        <TopNavBar/>
        <LogoNavBar/>
        <Row className='mx-0'>
          <Col lg={3} className='mx-2 text-center'>
            <h1 className='mt-5 mx-2 checkout-header'>Checkout</h1>
          </Col>
        </Row>
        <Container className='checkout-container mt-1'>
          <CheckOutItem/>
        </Container>
      </React.Fragment>
  );
};

export default CheckOutPage;
