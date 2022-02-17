import ProductReducer from "./ProductReducer"
import CartReducer from "./CartReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer
});

export default rootReducer;