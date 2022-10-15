import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {},
  styles: {
    global: (props) => ({
      body: {
        bg: mode("secondaryGray.300", "navy.900")(props),
      },
    }),
  },
};
