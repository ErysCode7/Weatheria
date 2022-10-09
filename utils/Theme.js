import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const Theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
};

// 3. extend the theme
const theme = extendTheme(Theme);

export default theme;
