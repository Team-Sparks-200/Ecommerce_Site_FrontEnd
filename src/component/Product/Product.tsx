import React from "react";
import {Row, Col, Card, CardImg, Button} from "react-bootstrap";
import ConfirmButton from "../common/ConfirmButton";
import NumericInput from 'react-numeric-input';

type ProductProps = {
    item: {
        id: number
        name: string,
        new_price: string,
        old_price: string
        image: string
    }
}

const Product: React.FC<ProductProps> = (props: ProductProps) => {
    const {item} = props;
    return (
        <Col lg={3} md={4} xs={6}>
            <div className="product-bg text-center d-block mb-5">
                <img src={item.image} alt={item.name} />
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
                        <NumericInput className="form-control"/>
                    </Col>
                    <Col className="mt-md-2 mt-lg-0 mt-2">
                        <Button className="btn add-to-cart-button">Add To Cart</Button>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}

export default Product;