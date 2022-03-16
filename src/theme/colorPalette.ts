export interface ColorPalette {
  [key: string]: {
    dark?: string;
    main: string;
    light?: string;
    superDark?: string;
    superLight?: string;
  };
}
const colorPalettes: ColorPalette = {
  white: {
    main: "#fff",
  },
  rickBlack: {
    main: "#0A0A0B",
  },
  blue: {
    superDark: "#040212",
    dark: "#140A5C",
    main: "#2F18DC",
    light: "#8C7EF1",
    superLight: "#EFEDFD",
  },
  green: {
    superLight: "#ECFEF8",
    light: "#8BF9D6",
    main: "#0BD595",
    dark: "#07885F",
  },
  rose: {
    light: "#F36871",
    main: "#ED1D2A",
    dark: "#970C15",
  },
  skyBlue: {
    light: "#99E4FF",
    main: "#1FC3FF",
    dark: "#0078A3",
  },
  grey: {
    superLight: "#EBFAFF",
    light: "#D4D4D8",
    main: "#94949E",
    dark: "#303036",
    superDark: "#000F14",
  },
};

export default colorPalettes;
