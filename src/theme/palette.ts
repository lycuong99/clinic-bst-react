import { PaletteOptions } from "@mui/material";
import colorPalettes from "./colorPalette";
import blue from "@mui/material/colors/blue";

const themePalette = (): PaletteOptions => {
  return {
    primary: {
      ...colorPalettes.rose,
    },
    secondary: blue,
    text: {
      primary: colorPalettes.rickBlack.main,
      secondary: colorPalettes.skyBlue.superDark,
    },
    background: {
      default: colorPalettes.white.main,
      paper: colorPalettes.white.main,
    },
    action: {
      hover: colorPalettes.rose.light,
      // selected: "#000",
    },
    divider: "#000",
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      900: "#212121",
    },
  };
};

export default themePalette;
