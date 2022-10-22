import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./Styles";

// 2. Add your color mode config
const Theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  globalStyles,
};

// 3. extend the theme
const theme = extendTheme(globalStyles);

export default theme;
