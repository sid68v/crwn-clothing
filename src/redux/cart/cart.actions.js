import { CartActionTypes } from "./cart.types";

export const toggleCartVisibility = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_VISIBILITY
  };
};

export const addItem = item => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  };
};
