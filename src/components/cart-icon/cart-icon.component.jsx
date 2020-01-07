import React from "react";
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";
import { selectorCartItemCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = props => {
  const { toggleCartVisibility, itemCount } = props;
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemCount: selectorCartItemCount(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartVisibility: () => dispatch(toggleCartVisibility())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
