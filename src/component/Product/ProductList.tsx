import React from "react";
import {Container, Row} from "react-bootstrap";
import Product from "./Product";
import {Products} from "../../datalist/Products";
import {addToCart} from "../../store/action/CartAction";
import {useDispatch, useSelector} from "react-redux";

const ProductList: React.FC = (props) => {

  const cart = useSelector((state) => state)
  const dispatch = useDispatch();

  return (
      <Container fluid={true}>
        <Row className="product-list mx-lg-5 mx-md-1 my-5">
          {Products.map((product) => {
            return (
                <Product
                    key={product.id}
                    item={product}
                    addToCart={() => dispatch(addToCart(product))}
                />
            )
          })}
        </Row>
      </Container>
  );
}

export default ProductList;