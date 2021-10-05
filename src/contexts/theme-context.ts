import React from 'react';

export const themes = {
  light: {
    foreground: "#222",
    background: "#eee",
    primary: "",
    secondary: "",
    accent: "",
    muted: "",
    light: "",
    dark: "",
  },
  dark: {
    foreground: "#eee",
    background: "#222",
    primary: "",
    secondary: "",
    accent: "",
    muted: "",
    light: "",
    dark: "",
  },
};


export const ThemeContext = React.createContext(
  themes.light
);