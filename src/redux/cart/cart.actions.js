import { CartActionTypes } from "./cart.types";

export const toggleCartVisibility = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_VISIBILITY,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const clearItemFromCart = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item,
  };
};

export const reduceItemInCart = (item) => {
  return {
    type: CartActionTypes.REDUCE_ITEM,
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
};
