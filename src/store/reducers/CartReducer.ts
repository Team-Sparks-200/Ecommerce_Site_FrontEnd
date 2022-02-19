import {ICartItem} from "../../datalist/Types";
import CoconutImage from "../../assets/images/Coconut.jpg";

const initialState: ICartItem[] = [
  {
    id: 1,
    name : "Coconut",
    new_price : "65.00",
    old_price : "60.00",
    image : CoconutImage,
    quantity: 100
  },
  {
    id: 2,
    name : "Coconut",
    new_price : "65.00",
    old_price : "60.00",
    image : CoconutImage,
    quantity: 100
  },
]

const CartReducer = (state:ICartItem[] = initialState, action : any) => {

  let cart = state;

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