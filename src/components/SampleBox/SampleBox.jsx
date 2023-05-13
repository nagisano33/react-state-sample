import React from "react";
import { ThemeProvider } from "./contexts/themeContext";
import Header from "./Header";

export const SampleBox = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};
