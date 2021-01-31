import { HStack, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <HStack justify="space-between" color="#78808A">
      <Text fontSize="xs" fontWeight="300">
        Comic Fridays App
      </Text>
      <Text fontSize="xs" fontWeight="300">
        Made with ❤ by Shehu
      </Text>
      <Text fontSize="xs" fontWeight="300">
        Per il Mio 🍍
      </Text>
    </HStack>
  );
}

export default Footer;
