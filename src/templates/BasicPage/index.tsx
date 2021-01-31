import { Flex, Stack, Box } from "@chakra-ui/react";
import Footer from "components/Footer";

type BasicPageProps = {
  children: React.ReactNode;
};

function BasicPage({ children }: BasicPageProps) {
  return (
    <Stack h="100vh" align="center">
      <Flex h="100%" w="100%" maxW="1024px" py="50px" flexDir="column">
        <Box pos="relative" flex="8">
          {children}
        </Box>
        <Stack justify="flex-end" flex="1">
          <Footer />
        </Stack>
      </Flex>
    </Stack>
  );
}

export default BasicPage;
