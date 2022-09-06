import { TypographyOptions } from "@mui/material/styles/createTypography";
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

const typographies = (): TypographyOptions => {
  return {
    fontFamily: fontFamily,
    h1: {
      fontSize: "1.8rem",
      fontWeight: 600,
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
  };
};
export default typographies;
