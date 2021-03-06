import React from 'react';
import styled from 'styled-components';
import font from '../theme/font';
import color from '../theme/color';

const StyledHeader = styled.div`
  height: 64px;
  font-size: ${font.titleFont}px;
  color: ${color.themeColor};
  width: 100%;
  text-align: center;
`;

function Header() {
  return <StyledHeader>Covid-19 Canada</StyledHeader>;
}

export default Header;
