import styled, { css } from "styled-components";

const GoogleSigninStyles = css`
  background-color: #4286f5;
  color: white;
  
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const InvertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const ButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const GetButtonStyles = (props) => {
  if (props.signInWithGoogle) return GoogleSigninStyles;
  else return props.inverted ? InvertedStyles : ButtonStyles;
};

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;

  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;

  ${GetButtonStyles}
`;
