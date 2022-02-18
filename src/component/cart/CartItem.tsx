import React, {ChangeEvent, FormEvent, useState} from 'react';
import {connect} from "react-redux";
import {removeFromCart, updateCartQuantity} from "../../store/action/CartAction";
import {IProduct} from "../../datalist/Types";

type CartItemProps = {
  Item: any
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const {Item} = props;
  const [quantity, setQuantity] = useState(Item.quantity);
  const [btnVisibility, setBtnVisibility] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    // @ts-ignore
    if (!(e.target.value > 0)) {
      alert("Quantity must be greater than or equal to 1");

      return;
    }

    if (e.target.value > Item.product.amount) {
      alert("You have exceeded the available items of this product!");

      return;
    }

    if (quantity != e.target.value) {
      setQuantity(e.target.value);
      setBtnVisibility(true);
      updateCartQuantity(Item.product.id, quantity);
    }
  }

  const handleRemove = (e: FormEvent) => {
    removeFromCart(Item.product.id);
  }

  const UpdateButtonRendering = () => {
    if(btnVisibility){
      return (<div className="col-xs-2">
        <button type="submit" className="btn btn-info">Update</button>
      </div>
      )
    }
  }

  return (

      <div className="row">
        <div className="col-xs-2"><img className="img-responsive" src={Item.product.image}/>
        </div>
        <div className="col-xs-4">
          <h4 className="product-name"><strong>{Item.product.title}</strong></h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-3 text-right">
            <h6><strong>{Item.product.price} <span className="text-muted">x</span></strong></h6>
          </div>
          <form>
            <div className="col-xs-4">
              <input type="number" className="form-control input-sm" onChange={handleChange}
                     value={quantity}/>
            </div>
            {UpdateButtonRendering}
            <div className="col-xs-2">
            <button type="button" onClick={handleRemove} className="btn btn-link btn-xs">
            <span className="glyphicon glyphicon-trash"> </span>
            </button>
            </div>
            </form>
            </div>
            </div>
            );
          };

            const mapDispatchToProps = (dispatch: any) => {

            return {
            updateCartQuantity: (productId : IProduct['id'], quantity: number) => dispatch(updateCartQuantity(productId, quantity)),
            removeFromCart: (productId : IProduct['id']) => dispatch(removeFromCart(productId))
          }
          };

            export default connect(null,mapDispatchToProps)(CartItem);
