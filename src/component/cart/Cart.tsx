import React from 'react';
import CartItem from "./CartItem";
import {connect} from "react-redux";
import {ICart, ICartItem, IProduct} from "../../datalist/Types";
// import {IProduct} from "../../datalist/Types";
type CartProps = {
  cart: ICart
}

const Cart: React.FC<CartProps> = (props) => {
  const {cart} = props;
  let total = 0;
  const cartItems = cart.cart.length > 0 ? (

      <div>
        <div className="panel-body">
          {
              cart.cart.map((item:ICartItem, index: number) =>{
                return (
                    <div key={item.id}>
                      <CartItem item={item}/>
                      <hr/>
                    </div>
                )

              })}
        </div>
        <div className="panel-footer">
          <div className="row text-center">
            <div className="col-xs-11">
              <h4 className="text-right">Total <strong>${total.toFixed(3)}</strong></h4>
            </div>

          </div>
        </div>
      </div>

  ) : (
      <div className="panel-body">
        <p>Cart is empty</p>
      </div>
  )

  return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <div className="panel-title">
                  <div className="row">
                    <div className="col-xs-6">
                      <h5><span className="glyphicon glyphicon-shopping-cart"></span> My Shopping Cart</h5>
                    </div>

                  </div>
                </div>
              </div>

              {cart}

            </div>
          </div>
        </div>
      </div>
  )

}
;
const mapStateToProps = (state: any) => {

  return {
    cart: state.cart.cart
  }
};

export default connect(mapStateToProps)(Cart);