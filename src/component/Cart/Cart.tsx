import React from 'react';
import {connect} from "react-redux";
import {ICartItem} from "../../datalist/Types";
import CartItem from "./CartItem";

type CartProps = {
  cart: ICartItem[]
}

const Cart: React.FC<CartProps> = (props:CartProps) => {
      const {cart} = props;
      let total = 0;

      const handleCartRendering = () => {
        if (cart.length > 0) {
          return (

              <div>
                <div className="panel-body">
                  {
                    cart.map((item: ICartItem, index: number) => {
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
          )
        }
        return (
                <div className="panel-body">
                  <p>Cart is empty</p>
                </div>
        )

      };


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

                  {handleCartRendering()}

                </div>
              </div>
            </div>
          </div>
      )

    }
;
const mapStateToProps = (state: any) => {

  return {
    cart: state
  }
};

export default connect(mapStateToProps)(Cart);