import React, { Children } from "react";
import {ButtonContainer} from './custom-button.styles'

const CustomButton = props => {
  const { children, ...otherProps } = props;
  return (
    <ButtonContainer
      {...otherProps}
    >
      {children}
    </ButtonContainer>
  );
};

export default CustomButton;
