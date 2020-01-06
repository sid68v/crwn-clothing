import React, { Children } from "react";
import "./custom-button.styles.scss";

const CustomButton = props => {
  const { children, signInWithGoogle, inverted, ...otherProps } = props;
  return (
    <button
      className={` ${inverted ? "inverted" : ""} 
      ${signInWithGoogle ? "sign-in-google" : ""} 
      custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
