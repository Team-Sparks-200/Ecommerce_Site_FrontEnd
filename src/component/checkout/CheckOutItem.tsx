import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import CarrotImage from "../../assets/images/Carrot.jpg"
import QuantityHandler from "../common/QuantityHandler";

const CheckOutItem: React.FC = () => {
  return (
      <Row className="d-flex align-items-center">
        <Col>1</Col>
        <Col>
          <Image src={CarrotImage}/>
        </Col>
        <Col>Carrot 1kg</Col>
        <QuantityHandler/>
        <Col> Rs. 999.99</Col>
        <Col>Rs. 999,999.00</Col>
      </Row>
  );
};

export default CheckOutItem;
