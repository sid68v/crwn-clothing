import { createSelector } from "reselect";

const selectorCart = state => state.cart;

export const selectorCartHidden = createSelector(
  [selectorCart],
  cart => cart.hidden
);

export const selectorCartItems = createSelector(
  [selectorCart],
  cart => cart.cartItems
);

export const selectorCartItemCount = createSelector(
  [selectorCartItems],
  items => items.reduce((total, item) => total + item.quantity, 0)
);

export const selectorCartTotalPrice = createSelector(
  [selectorCartItems],
  cartItems =>
    cartItems.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0
    )
);
