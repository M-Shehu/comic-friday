import {
  HStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function MailingList() {
  return (
    <HStack justify="space-between">
      <Text fontSize="xl" fontWeight="bold" flexBasis="50%">
        New curated comics every first Friday of the month. Subscribe to the
        mailing list to never miss a pick
      </Text>
      <HStack flexBasis="45%">
        <InputGroup flex="1">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="#365363" />}
          />
          <Input
            placeholder="Email address"
            _placeholder={{ color: "#365363", opacity: "0.7" }}
            borderColor="#365363"
            textColor="#365363"
          />
        </InputGroup>
        <Button colorScheme="orange" bgColor="#8B6453">
          Subscribe
        </Button>
      </HStack>
    </HStack>
  );
}

export default MailingList;
