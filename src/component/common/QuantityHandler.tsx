import React, {useState} from 'react';
import {HiOutlineMinusCircle, HiOutlinePlusCircle} from "react-icons/hi";
import {Col} from "react-bootstrap";

type QuantityHandlerProps = {
  quanityOfProduct: number
}

const QuantityHandler: React.FC<QuantityHandlerProps> = (props) => {

  const {quanityOfProduct} = props;
  let [quantity, setQuantity] = useState<number>(quanityOfProduct);
  const increaseQuantity = () => {
    quantity += 1;
    setQuantity(quantity);
  }

  const decreaseQuantity = () => {
    quantity -= 1;
    setQuantity(quantity);
  }

  return (
      <Col className='d-flex align-items-center'>
        <HiOutlineMinusCircle onClick={decreaseQuantity} className='me-1 h6 text-muted'/>
        <div className='h5 text-muted fw-light'>{quantity}</div>
        <HiOutlinePlusCircle onClick={increaseQuantity} className='ms-1 h6 text-muted'/>
      </Col>
  );
};

export default QuantityHandler;
