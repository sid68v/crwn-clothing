import { CartActionTypes } from "./cart.types";

export const toggleCartVisibility = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_VISIBILITY
  };
};
