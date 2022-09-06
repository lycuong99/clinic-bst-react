import { createTheme } from "@mui/material";
import themePalette from "./palette";
import typographies from "./typography";


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
    direction: "ltr",
    typography: typographies,
    mixins: {
      toolbar: {
        height: "64px",
      },
    },
  });
  return themes;
};

export default theme;
