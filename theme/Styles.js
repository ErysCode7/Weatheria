import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {},
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#e5e7eb", "navy.900")(props),
      },
    }),
  },
};
