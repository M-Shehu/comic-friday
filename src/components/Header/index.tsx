import {
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import comicFridayLogo from "assets/svg/logo.svg";

function Header() {
  return (
    <HStack justify="space-between">
      <HStack maxW="30">
        <Image src={comicFridayLogo} />
        <Heading fontFamily="merriweather">
          Comic <br /> Fridays
        </Heading>
      </HStack>
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
    </HStack>
  );
}

export default Header;
