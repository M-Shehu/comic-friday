import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import "./styles/index.css";

export default function LoadingIcon() {
  return (
    <Center minH="100vh">
      <SimpleGrid columns={2} spacing="5px">
        <Box
          className="loading-square first"
          boxSize="50px"
          bgColor="#8b6453"
        ></Box>
        <Box
          className="loading-square second"
          boxSize="50px"
          bgColor="#365363"
        ></Box>
        <Box
          className="loading-square fourth"
          boxSize="50px"
          bgColor="#365363"
        ></Box>
        <Box
          className="loading-square third"
          boxSize="50px"
          bgColor="#365363"
        ></Box>
      </SimpleGrid>
    </Center>
  );
}
