import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

import { selectorCartItems } from "../../redux/cart/cart.selectors";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = props => {
  const { cartItems } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    cartItems: selectorCartItems(state)
  };
};

export default connect(mapStatetoProps)(CartDropdown);
