import React from "react";
import "./cart-icon.styles.scss";

import {connect} from 'react-redux'
import {toggleCartVisibility} from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = (props) => {
 const  {toggleCartVisibility}= props;
  return (
    <div className="cart-icon" onClick={toggleCartVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps=(dispatch)=>{
return({
  toggleCartVisibility: () => dispatch(toggleCartVisibility())
})
}

export default connect(null,mapDispatchToProps)(CartIcon);