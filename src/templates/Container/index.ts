import { chakra } from "@chakra-ui/react";

const Container = chakra("div", {
  baseStyle: {
    display: "flex",
    w: "100%",
    maxW: "1024px",
    px: ["25px", "50px"],
    flexDir: "column",
  },
});

export default Container;
