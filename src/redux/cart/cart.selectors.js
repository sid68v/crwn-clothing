import { createSelector } from "reselect";

const selectorCart = state => state.cart;

export const selectorCartItems = createSelector(
  [selectorCart],
  cart => cart.cartItems
);

export const selectorCartItemCount = createSelector(
  [selectorCartItems],
  items => items.reduce((total, item) => total + item.quantity, 0)
);
