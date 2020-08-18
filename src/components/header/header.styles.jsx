import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  width: 70px;
  height: 100%;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  ${OptionStyles}
`;

export const OptionDiv = styled.div`
  ${OptionStyles}
`;
