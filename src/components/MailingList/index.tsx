import { Stack, HStack, Text, Input, Button, useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import fetchJsonp from "fetch-jsonp";

const MAIL_CHIMP_URL =
  "https://dev.us7.list-manage.com/subscribe/post-json?u=221eed8339c28c8801e8b6b8d&amp;id=2ab4a84849";

function MailingList() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const subscribe = () =>
    fetchJsonp(MAIL_CHIMP_URL + "&" + new URLSearchParams({ EMAIL: email }), {
      jsonpCallback: "c",
    }).then(resp => resp.json());

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { msg, result } = await subscribe();
    setLoading(false);
    if (result === "error") {
      if (typeof msg === "string" && msg.includes("already subscribed")) {
        toast({
          title: "Already subscribed!",
          description: msg.slice(0, msg.indexOf("to")),
          status: "warning",
          duration: 8000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error!",
          description: msg,
          status: "error",
          duration: 8000,
          isClosable: true,
        });
      }
    } else if (result === "success") {
      toast({
        title: "Success!",
        description: "Welcome to the Comic Friday mailing list!",
        status: "success",
        duration: 8000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      py="50px"
      pb={[0, "50px"]}
      flex="2"
      direction={["column", "column", "row"]}
      align="center"
      justify="space-between"
    >
      <Text
        fontSize={["sm", "xl"]}
        fontWeight={["normal", "bold"]}
        flexBasis="50%"
      >
        New curated comics every first Friday of the month. Subscribe to the
        mailing list to never miss a pick
      </Text>
      <form style={{ flexBasis: "45%", height: "100%" }} onSubmit={onSubmit}>
        <HStack>
          <Input
            placeholder="Email address"
            _placeholder={{ color: "#365363", opacity: "0.7" }}
            borderColor="#365363"
            textColor="#365363"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            size="md"
            px="30px"
            colorScheme="orange"
            isDisabled={loading}
            isLoading={loading}
            type="submit"
            bgColor="#8B6453"
          >
            Subscribe
          </Button>
        </HStack>
      </form>
    </Stack>
  );
}

export default MailingList;
