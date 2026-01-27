import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
//import type { ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export default extendTheme({ config });
