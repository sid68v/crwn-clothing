import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (Component) => (props) => {
  const { isLoading, ...otherProps } = props;
  return isLoading? 
  <SpinnerOverlay>
      <SpinnerContainer/>
  </SpinnerOverlay>
  :
  <Component {...otherProps}/>
};


export default WithSpinner