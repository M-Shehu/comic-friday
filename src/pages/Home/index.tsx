import { useQuery } from "react-query";
import { useDisclosure } from "@chakra-ui/hooks";

import BasicPage from "templates/BasicPage";
import MailingList from "components/MailingList";
import ComicPicks from "components/ComicPicks";

import Container from "templates/Container";
import { fetchComicsCount, fetchComicsPage } from "api/comics";
import LoadingIcon from "components/LoadingIcon";
import { ComicBundleType } from "interfaces";
import { useParams } from "react-router-dom";
import { Alert } from "@chakra-ui/alert";
import { RiCake3Fill } from "react-icons/ri";
import Icon from "@chakra-ui/icon";

import ExclusiveModal from "./components/ExclusiveModal";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { currentPage } = useParams<{ currentPage: string }>();

  const { isLoading, data: { comicPicks, count = 1 } = {} } = useQuery<{
    comicPicks: ComicBundleType[];
    count: number;
  }>(["comicsPicks", currentPage], async () => {
    const count = await fetchComicsCount();
    const comicStart = (+currentPage - 1) * 3;
    const comicPicks = await fetchComicsPage(comicStart);
    return { comicPicks, count };
  });

  const numberOfPages = Math.ceil(count / 3);

  return isLoading ? (
    <LoadingIcon />
  ) : (
    <BasicPage>
      <Alert
        as="button"
        status="success"
        justifyContent="center"
        mb={8}
        onClick={onOpen}
      >
        <Icon
          as={RiCake3Fill}
          boxSize="35px"
          padding="8px"
          borderRadius="50%"
          bg="green.500"
          color="white"
          mr="10px"
        />
        Click here if you're a pretty 💁‍♀️ and your birth month is May 🍍
      </Alert>
      <Container flexDir={["column-reverse", "column"]} h="100%">
        <ComicPicks comicPicks={comicPicks} numberOfPages={numberOfPages} />
        <MailingList />
      </Container>
      <ExclusiveModal isOpen={isOpen} onClose={onClose} />
    </BasicPage>
  );
}
