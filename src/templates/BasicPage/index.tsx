import { Stack } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";
import Container from "templates/Container";

type BasicPageProps = {
  children: React.ReactNode;
};

function BasicPage({ children }: BasicPageProps) {
  return (
    <Stack minH="100vh" align="center" justify="space-between">
      <Container mt={["25px", "50px"]}>
        <Header />
      </Container>
      {children}
      <Container mb={["25px", "50px"]}>
        <Footer />
      </Container>
    </Stack>
  );
}

export default BasicPage;
