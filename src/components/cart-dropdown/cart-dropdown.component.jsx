import React from "react";
import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { toggleCartVisibility } from "../../redux/cart/cart.actions";
import { selectorCartItems } from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = props => {
  const { cartItems, history, dispatch } = props;
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="empty-message">Cart is empty !</div>
      )}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartVisibility());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectorCartItems
});

export default withRouter(connect(mapStatetoProps)(CartDropdown));
