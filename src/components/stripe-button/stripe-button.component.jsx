import React from "react";
import "./stripe-button.styles.scss";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = (props) => {
  const { price } = props;

  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H7fUTLwhWhhPv6GxSVajaRWzqeOmk2mfkwo17NQKP1XdK3t7yWKjOF3mYHBSbxwitGHCqefhqkJMgDFxVHhVoXN00SHirkI9v";

  const onToken = (token) => {
    console.log("Token : ", token);
    console.log("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Checkout Now"
      name="Crown Clothing Ltd."
      panelLabel="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
