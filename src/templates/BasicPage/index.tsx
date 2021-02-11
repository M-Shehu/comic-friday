import { Flex } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import Container from "templates/Container";

type BasicPageProps = {
  children: React.ReactNode;
};

function BasicPage({ children }: BasicPageProps) {
  return (
    <Flex
      direction="column"
      minH="100vh"
      align="center"
      justify="space-between"
    >
      <Container my={["25px", "50px"]}>
        <Header />
      </Container>
      {children}
      <Container my={["25px", "50px"]}>
        <Footer />
      </Container>
    </Flex>
  );
}

export default BasicPage;
