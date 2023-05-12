import { createContext, useContext, useReducer } from "react";

const LanguageContext = createContext();
const LanguageDispatchContext = createContext();

const reducer = (prev, { type }) => {
  switch (type) {
    case "jp":
    case "en":
      return type;
    default:
      throw new Error("不明な action です");
  }
};

const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, "jp");
  return (
    <LanguageContext.Provider value={state}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  return useContext(LanguageContext);
};

const useLanguageDispatch = () => {
  return useContext(LanguageDispatchContext);
};

export { LanguageProvider, useLanguage, useLanguageDispatch };
