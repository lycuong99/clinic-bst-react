import { createTheme } from "@mui/material";
import themePalette from "./palette";

const fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

const themeOption = {
  heading: "#212121",
  paper: "#ffffff",
  backgroundDefault: "#ffffff",
  background: "#e3f2fd",
  darkTextPrimary: "#bdc8f0",
  darkTextSecondary: "#8492c4",
  textDark: "#212121",
  divider: "#eeeeee",
};

export const theme = () => {
  
  const themes = createTheme({
    palette: themePalette(),
    spacing: 4,
    typography: {
      fontFamily: fontFamily,
      h1: {
        fontSize: "1.8rem",
      },
      h2: {
        fontSize: "1.6rem",
      },
      h3: {
        fontSize: "1.424rem",
      },
      h4: {
        fontSize: "1.266rem",
      },
      h5: {
        fontSize: "1.125rem",
      },
      body1: {
        fontSize: "1.125rem",
      },
      body2: {
        fontSize: "1rem",
      },
      subtitle1: {
        fontSize: "1.125rem",
      },
      subtitle2: {
        fontSize: "1rem",
      },
      caption: {
        fontSize: "0.889rem",
      },
      button: {
        textTransform: "capitalize",
      },
      htmlFontSize: 16,
    },
  });
  return themes;
};

export default theme;
