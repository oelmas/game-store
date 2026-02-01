import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
//import type { ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export default extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",

    },
    700: "#5c5c5c",
    800: "#4a4a4a",
    900: "#3b3b3b",
  },
});
