import { Stack } from "@chakra-ui/react";

import BasicPage from "templates/BasicPage";
import Header from "components/Header";
import ComicPicks from "components/ComicPicks";

import { comicPicks } from "mocks";

export default function ComicPick() {
  return (
    <BasicPage>
      <Header />
      <Stack mt="50px" spacing="95px">
        <ComicPicks comicPicks={comicPicks} />
      </Stack>
    </BasicPage>
  );
}
