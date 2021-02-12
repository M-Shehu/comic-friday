import {
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Modal,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";

import comicFridayLogo from "assets/svg/logo.svg";

function Header() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
            onClick={onOpen}
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
              onClick={onOpen}
            />
          </InputGroup>
        )}
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search not available</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1rem">Search functionality is coming soon</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Header;
