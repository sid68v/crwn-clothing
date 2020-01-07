import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = props => {
  const { cartItems } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStatetoProps = ({ cart: { cartItems } }) => {
  return {
    cartItems
  };
};

export default connect(mapStatetoProps)(CartDropdown);
