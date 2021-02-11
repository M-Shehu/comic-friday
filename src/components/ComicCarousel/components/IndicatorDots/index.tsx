import { Box, HStack } from "@chakra-ui/react";
import { ComicType } from "interfaces";

type DotsType = {
  comics: ComicType[];
  currentIndex: number;
};
export function IndicatorDots({ comics, currentIndex }: DotsType) {
  return (
    <HStack spacing={["7px", "10px"]}>
      {comics.map((_, index) => (
        <Box
          key={"indicator" + index}
          boxSize={["6px", "8px"]}
          borderRadius="50%"
          bg={currentIndex === index ? "accent.500" : "accent.100"}
        />
      ))}
    </HStack>
  );
}
