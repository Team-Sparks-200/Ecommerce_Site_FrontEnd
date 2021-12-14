import React from 'react';
import TopNavBar from "../TopNavBar";
import {Col, Container, Row} from "react-bootstrap";
import CheckOutItem from "./CheckOutItem";
import CarrotImage from "../../assets/images/Carrot.jpg"
import LogoNavBar from "../LogoNavBar";

const CheckOutPage: React.FC = () => {
  const checkotProduct = {
    image: CarrotImage,
    name: "Carrot",
    quantity: 3,
    unit_price: 300
  }
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
          <CheckOutItem checkOutItem={checkotProduct}/>
        </Container>
      </React.Fragment>
  );
};

export default CheckOutPage;
