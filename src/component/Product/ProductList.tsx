import React from "react";
import {Container, Row} from "react-bootstrap";
import Product from "./Product";
import {Products} from "../../datalist/Products";
import {addToCart} from "../../store/action/CartAction";
import {IProduct} from "../../datalist/Types";
import {connect} from "react-redux";
import {Dispatch} from "redux";



const ProductList: React.FC = () => {

  const addToCart = (product: IProduct) => {

  }

  return (
      <Container fluid={true}>
        <Row className="product-list mx-lg-5 mx-md-1 my-5">
          {Products.map((product) => {
            return (
                <Product
                    key={product.id}
                    item={product}
                    addToCart={}
                />
            )
          })}
        </Row>
      </Container>
  );
}
const mapStateToProps = (state: any) => {

  return {
    products: state.product.products,
    cart: state.cart.cart
  }
};

const mapDispatchToProps = (dispatch : Dispatch) => {
  return {
    addToCart: (product:IProduct) => {
      dispatch(addToCart(product));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);