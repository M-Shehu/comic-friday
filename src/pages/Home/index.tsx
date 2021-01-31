import { Box, Stack } from "@chakra-ui/react";

import BasicPage from "templates/BasicPage";
import Header from "components/Header";
import MailingList from "components/MailingList";
import ComicPicks from "components/ComicPicks";

import { comicPicks } from "mocks";
import { useComicBundleStore } from "store";

export default function Home() {
  const currentPick = useComicBundleStore(state => state.currentPick);
  const isOnHomeScreen = !currentPick;
  return (
    <BasicPage>
      <Header />
      <Box pt="90px" h="100%">
        <ComicPicks comicPicks={comicPicks} />
      </Box>
      <Box pos="absolute" bottom="0">
        {isOnHomeScreen && <MailingList />}
      </Box>
    </BasicPage>
  );
}
