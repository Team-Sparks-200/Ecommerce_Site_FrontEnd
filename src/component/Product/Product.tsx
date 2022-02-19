import React, {FormEvent, useState} from "react";
import {Row, Col, Button} from "react-bootstrap";
import NumericInput from 'react-numeric-input';
import {IProduct} from "../../datalist/Types";


type ProductProps = {
  item : IProduct,
  addToCart : (product: IProduct) => void
}

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const {item, addToCart} = props;
  const [inCart, setInCart] = useState<boolean>(false);

  const addItemToCart = (e: FormEvent) => {
    e.preventDefault();
    addToCart(item)
    setInCart(true);
  }

  return (
      <Col lg={3} md={4} xs={6}>
        <div className="product-bg text-center d-block mb-5">
          <img src={item.image} alt={item.name}/>
          <h4>{item.name}</h4>
          <Row className="d-flex flex-wrap mx-lg-2 mx-2 mx-md-0 my-2 mb-lg-3 mb-md-3">
            <Col>
              <label className="product-price-discount">{item.old_price}</label>
            </Col>
            <Col>
              <label className="product-price">Rs. {item.new_price}</label>
            </Col>
          </Row>
          <Row className="d-flex flex-wrap mx-lg-2 mx-2 mx-md-4 my-2 mb-lg-3 mb-md-3">
            <Col>
              <NumericInput className="form-control" value={0} min={0} style={{
                btn:{border:"none",background:"transparent",boxShadow:"none",padding: "4px",margin:"2px",height:"15px", fontSize:"16px"},
                btnUp:{position:"absolute",top:"50%"},
                btnDown:{position:"absolute",top:0}}}/>
            </Col>
            <Col className="mt-md-2 mt-lg-0 mt-2">
              <Button className="btn add-to-cart-button" onClick={addItemToCart}>Add To Cart</Button>
            </Col>
          </Row>
        </div>
      </Col>
  );
}

export default Product;