import React, { Component } from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";

import {
  clearItemFromCart,
  reduceItemInCart,
  addItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = props => {
  const { item, clearItem, reduceItem, addItem } = props;
  const { imageUrl, name, quantity, price } = item;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clearItem: item => dispatch(clearItemFromCart(item)),
    reduceItem: item => dispatch(reduceItemInCart(item)),
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
