import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        fontFamily: "'Merriweather', serif",
        background: "#f9f1ea",
        height: "100vh",
        color: "#365363",
      },
    },
  },
  colors: {
    primary: "#365363",
    accent: "#8B6453",
  },
});

export default theme;
