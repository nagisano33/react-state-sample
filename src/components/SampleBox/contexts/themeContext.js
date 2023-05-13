import { useReducer, useContext, createContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

const reducer = (prev, type) => {
    switch (type) {
      case "light":
      case "dark":
        return type;
      default:
        throw new Error("不明な action です");
    }
  };

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, "light");

  return (
    <ThemeContext.Provider value={state}>
      <ThemeUpdateContext.Provider value={dispatch}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const useUpdateTheme = () => useContext(ThemeUpdateContext);
