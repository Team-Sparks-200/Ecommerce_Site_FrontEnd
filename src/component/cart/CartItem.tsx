import React, {ChangeEvent, FormEvent, useState} from 'react';
import {connect} from "react-redux";
import {removeFromCart, updateCartQuantity} from "../../store/action/CartAction";
import {ICartItem, IProduct} from "../../datalist/Types";

type CartItemProps = {
  item: ICartItem
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const {item} = props;
  const [quantityofItem, setQuantityofItem] = useState<number>(item.quantity);
  const [btnVisibility, setBtnVisibility] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    // @ts-ignore
    if (!(e.target.value > 0)) {
      alert("Quantity must be greater than or equal to 1");

      return;
    }

    // @ts-ignore
    if (!quantityofItem || quantityofItem !== e.target.value) {
      return;
    } else {
      let quantity = parseInt(e.target.value)
      setQuantityofItem(quantity);
      setBtnVisibility(true);
      updateCartQuantity(item.id, quantity);
    }
  }

  const handleRemove = (e: FormEvent) => {
    removeFromCart(item.id);
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
        {/*<div className="col-xs-2"><img className="img-responsive" src={Item.product.image}/>*/}
        {/*</div>*/}
        <div className="col-xs-4">
          <h4 className="product-name"><strong>{item.name}</strong></h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-3 text-right">
            <h6><strong>{item.new_price} <span className="text-muted">x</span></strong></h6>
          </div>
          <form>
            <div className="col-xs-4">
              <input type="number" className="form-control input-sm" onChange={handleChange}
                     value={item.quantity}/>
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
