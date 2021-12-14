import React, {useEffect, useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import QuantityHandler from "../common/QuantityHandler";
import {ICheckOutItem} from "../types/Types";

type CheckOutItemProps = {
  checkOutItem : ICheckOutItem,
}

const CheckOutItem: React.FC<CheckOutItemProps> = (props) => {

  const {checkOutItem} = props;
  const [totalPrice,setTotalPrice] = useState<number>(checkOutItem.quantity*checkOutItem.unit_price);
  const [quantity, setQuantity] = useState<number>(checkOutItem.quantity);

  useEffect(() => {

  })

  return (
      <Row className="d-flex align-items-center">
        <Col>1</Col>
        <Col>
          <Image src={checkOutItem.image}/>
        </Col>
        <Col>{checkOutItem.name}</Col>
        <QuantityHandler quanityOfProduct={quantity}/>
        <Col> Rs. {checkOutItem.unit_price}</Col>
        <Col>Rs. {totalPrice}</Col>
      </Row>
  );
};

export default CheckOutItem;
