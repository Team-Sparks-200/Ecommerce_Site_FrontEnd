import {IProduct} from "../../datalist/Types";

export const addToCart = (product : IProduct) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      product,
      quantity: 1
    }
  }
}

export const removeFromCart = (productId : IProduct['id']) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      productId: productId
    }
  }
}

export const updateCartQuantity = (productId : IProduct['id'], quantity: number) => {
  return {
    type: 'UPDATE_CART_QUANTITY',
    payload: {
      productId,
      quantity: quantity
    }
  }
}