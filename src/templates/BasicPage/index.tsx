import { Flex, Stack } from "@chakra-ui/react";

type BasicPageProps = {
  children: React.ReactNode;
};

function BasicPage({ children }: BasicPageProps) {
  return (
    <Stack h="100%" align="center">
      <Flex w="100%" maxW="1024px" py="50px" flexDir="column">
        {children}
      </Flex>
    </Stack>
  );
}

export default BasicPage;
