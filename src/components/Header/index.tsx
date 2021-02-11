import {
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

import comicFridayLogo from "assets/svg/logo.svg";

function Header() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <HStack justify="space-between">
      <Link href="/">
        <HStack maxW="30">
          <Image w={["50px", "70px"]} src={comicFridayLogo} />
          <Heading
            as="h1"
            fontSize={["20px", "24px"]}
            size="lg"
            fontFamily="merriweather"
          >
            Comic <br /> Fridays
          </Heading>
        </HStack>
      </Link>
      {isTabletOrMobile ? (
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="Search button"
          icon={<SearchIcon color="#365363" />}
        />
      ) : (
        <InputGroup maxW="20%">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="#365363" />}
          />
          <Input
            placeholder="Search"
            _placeholder={{ color: "#365363", opacity: "0.7" }}
            borderColor="#365363"
            textColor="#365363"
          />
        </InputGroup>
      )}
    </HStack>
  );
}

export default Header;
