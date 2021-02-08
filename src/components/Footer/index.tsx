import { HStack, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <HStack justify="space-between" color="#78808A">
      <Text fontSize={["10px", "xs"]} fontWeight="300">
        Comic Fridays App
      </Text>
      <Text fontSize={["10px", "xs"]} fontWeight="300">
        Meticulously crafted by Shehu
      </Text>
      <Text fontSize={["10px", "xs"]} fontWeight="300">
        Per il Mio 🍍
      </Text>
    </HStack>
  );
}

export default Footer;
