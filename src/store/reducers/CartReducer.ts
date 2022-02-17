import {Cart} from "../../datalist/Types";

const initialState: Cart = {
  cart: []
}

const CartReducer = (state = initialState, action : any) => {

  let cart = state.cart;

  switch (action.type) {
    case 'ADD_TO_CART':
      cart.push(action.payload);
      return {
        ...state,
        cart: cart
      }

    case 'REMOVE_FROM_CART':
      let item = cart.find(item => item.id === action.payload.productId);
      let newCart = cart.filter(item => item.id !== action.payload.productId);

      if (item) {
        newCart.push(item);
      }
      return {
        ...state,
        cart: newCart
      };

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: cart.filter(item => item.id !== action.payload.productId)
      };

    default:
      return state;
  }
}

export default CartReducer;