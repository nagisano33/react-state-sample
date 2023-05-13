import React from "react";
import styled from "styled-components";
import { useTheme } from "./contexts/themeContext";
import ThemeRadio from "./ThemeRadio";

const StyledHeader = styled.div`
  padding: 2em;
  background: ${({ state }) => {
    return state === "light" ? "#cccccc" : "#606060";
  }};
`;

const Header = () => {
  // Theme の参照
  const context = useTheme();

  return (
    <StyledHeader state={context}>
      <ThemeRadio action={"light"} label={"ライトモード"} />
      <ThemeRadio action={"dark"} label={"ダークモード"} />
    </StyledHeader>
  );
};

export default Header;
