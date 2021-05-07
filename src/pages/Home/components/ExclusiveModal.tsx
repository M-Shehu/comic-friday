import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Box, Center, HStack, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { CircularProgress } from "@chakra-ui/progress";
import { SlideFade } from "@chakra-ui/transition";
import { useState } from "react";
import { useHistory } from "react-router";

type IExclusiveModal = {
  onClose: () => void;
  isOpen: boolean;
};
export default function ExclusiveModal({ onClose, isOpen }: IExclusiveModal) {
  const [error, setError] = useState(false);
  const [rightName, setRightName] = useState(false);
  const history = useHistory();

  const onChange = (value: string) => {
    if (value.length === 7) {
      if (value.toLocaleLowerCase() === "miosuti") {
        setRightName(true);
        setTimeout(() => {
          history.replace("/exclusive-club");
        }, 3000);
      } else {
        setError(true);
      }
    } else {
      setError(false);
    }
  };
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent
        bg="primary.500"
        overflowY="hidden"
        color="white"
        maxW="100%"
        minH={rightName ? "25%" : "50%"}
        transition="0.1s cubic-bezier(0.4, 0, 0.2, 1) height"
      >
        <ModalCloseButton />
        <ModalHeader>{rightName ? "Yaaay! 🥳" : "Almost there..."}</ModalHeader>

        <ModalBody display="flex" flexDir="column">
          {!rightName ? (
            <>
              <Text>
                You're about to get some pretty exclusive content birthday girl
                🌚. But before we proceed, riddle me this:
              </Text>
              <Box pt="20%" flexDir="column" h="100%">
                <Text align="center" fontWeight="bold">
                  Who's the prettiest woman in the world?
                </Text>
                <FormControl isInvalid={error}>
                  <HStack my={5} justify="center">
                    <PinInput
                      placeholder="_"
                      type="alphanumeric"
                      defaultValue="M"
                      onChange={onChange}
                    >
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <Box boxSize="20px" border="none" />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                  <FormErrorMessage>
                    That's not quite right... Are you sure you're May born?🤨
                  </FormErrorMessage>
                </FormControl>
              </Box>
            </>
          ) : (
            <SlideFade
              in={rightName}
              style={{ height: "100%" }}
              offsetX="20px"
              reverse
            >
              <Center flexDir="column" h="100%">
                <Text fontSize="xl" align="center">
                  Exclusive, never-seen-before comics 😱 await you my love!
                </Text>
                <CircularProgress isIndeterminate color="accent.500" />
              </Center>
            </SlideFade>
          )}
        </ModalBody>
        {!rightName && (
          <ModalFooter>
            <Button onClick={onClose} colorScheme="orange" bgColor="accent.500">
              I'm not the birthday girl 😐
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}
