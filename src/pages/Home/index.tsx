import BasicPage from "templates/BasicPage";
import Header from "components/Header";
import ComicBundle from "components/ComicBundle";
import MailingList from "components/MailingList";
import comic1 from "assets/comics/comic1.png";
import comic2 from "assets/comics/comic2.png";
import comic3 from "assets/comics/comic3.png";
import comic4 from "assets/comics/comic4.png";
import comic5 from "assets/comics/comic5.png";
import comic6 from "assets/comics/comic6.png";
import comic7 from "assets/comics/comic7.png";
import comic8 from "assets/comics/comic8.png";
import { HStack, Stack } from "@chakra-ui/react";

export default function Home() {
  const comicsSet1 = [comic1, comic2, comic3];
  const comicsSet2 = [comic4, comic5, comic6];
  const comicsSet3 = [comic3, comic8, comic7];
  return (
    <BasicPage>
      <Header />
      <Stack spacing="40px">
        <HStack w="100%" mt="140px" justify="space-between" align="center">
          <ComicBundle heading="4th December Picks" comics={comicsSet1} />
          <ComicBundle heading="28th November Picks" comics={comicsSet2} />
          <ComicBundle heading="30th October Picks" comics={comicsSet3} />
        </HStack>
        <MailingList />
      </Stack>
    </BasicPage>
  );
}
