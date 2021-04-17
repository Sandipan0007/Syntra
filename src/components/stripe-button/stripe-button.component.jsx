import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    "pk_test_51IgxhKSEOMqmUeYweqB2tJ7Crfl6A0QCo6UNn9Jv6BhcwF1R9n1ZFJBhCyYwHyn8c8GRxfyworsu1mUEsoeNXq1B00koexeUNF";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Syntra Fashion Ltd."
      billingAddress
      shippingAddress
      image="https://www.crushpixel.com/big-static14/preview4/letter-s-ss-shield-logo-1298636.jpg"
      description={`Your total is ₹₹{price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
