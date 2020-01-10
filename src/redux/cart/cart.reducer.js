import { CartActionTypes } from "./cart.types";
import { addItemToCart, clearItem, reduceItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItem(state.cartItems, action.payload)
      };

    case CartActionTypes.REDUCE_ITEM:
      return {
        ...state,
        cartItems: reduceItem(state.cartItems, action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
