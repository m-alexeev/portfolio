import React, { createContext, useContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#222",
    background: "#eee",
  },
  dark: {
    foreground: "#eee",
    background: "#222",
  },
};

export enum themeEnum {
  LIGHT = 1,
  DARK = 2,
}

interface ThemeContextState {
  theme: themeEnum;
  setTheme: React.Dispatch<React.SetStateAction<themeEnum>>;
}

const ThemeDefaults: ThemeContextState = {
  theme: themeEnum.LIGHT,
  setTheme: () => null,
};

const ThemeContext = createContext<ThemeContextState>(ThemeDefaults);

export function useThemeContext(){
  return useContext(ThemeContext);
};

function useThemeState(): ThemeContextState {
  const [theme, setTheme] = useState<themeEnum>(themeEnum.LIGHT);

  return {
    theme,
    setTheme,
  };
}

export const ThemeContextProvider:React.FC = ({ children }) => {
  const value = useThemeState();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
