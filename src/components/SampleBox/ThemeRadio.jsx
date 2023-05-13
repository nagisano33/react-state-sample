import React from "react";
import { useTheme, useUpdateTheme } from "./contexts/themeContext";

const ThemeRadio = ({ action, label }) => {
  // Theme のコンテキスト
  const context = useTheme();

  // Theme の更新関数
  const dispatch = useUpdateTheme();

  const changeHandler = (e) => {
    dispatch(e.target.value);
  };

  return (
    <label key={action}>
      {label}
      <input
        value={action}
        type="radio"
        onChange={changeHandler}
        checked={action === context}
      />
    </label>
  );
};

export default ThemeRadio;
