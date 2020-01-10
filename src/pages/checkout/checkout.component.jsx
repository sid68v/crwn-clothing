import React, { Component } from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectorCartItems,
  selectorCartTotalPrice
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

class CheckoutPage extends Component {
  render() {
    const { cartItems, total } = this.props;
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
        <div className="total">
          <span>TOTAL : ${total}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems,
  total: selectorCartTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
