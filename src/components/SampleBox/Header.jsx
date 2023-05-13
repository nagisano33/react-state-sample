import React from "react";
import styled from "styled-components";
import { useTheme, useUpdateTheme } from "./contexts/themeContext";

const StyledHeader = styled.div`
  background: ${({state}) => {
    return state === "light" ? "#cccccc" : "#606060";
  }};
`;

const Header = () => {
  const context = useTheme();

  const dispatch = useUpdateTheme();

  const selections = [
    { key: "light", value: "ライトモード" },
    { key: "dark", value: "ダークモード" },
  ];

  const changeHandler = (e) => {
    dispatch(e.target.value);
  };

  return (
    <StyledHeader state={context}>
      {selections.map((selection) => {
        return (
          <label key={selection.key}>
            {selection.value}
            <input
              value={selection.key}
              type="radio"
              onChange={changeHandler}
              checked={selection.key === context}
            />
          </label>
        );
      })}
    </StyledHeader>
  );
};

export default Header;
