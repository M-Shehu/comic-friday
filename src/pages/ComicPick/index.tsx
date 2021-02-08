import { Stack } from "@chakra-ui/react";

import BasicPage from "templates/BasicPage";
import ComicCarousel from "components/ComicCarousel";
import { useParams } from "react-router-dom";
import { comicPicks } from "mocks";

export default function ComicPick() {
  const { comicPickId } = useParams<{ comicPickId: string }>();
  const { comics = [], date } =
    comicPicks.find(comic => comic.id === comicPickId) || {};
  return (
    <BasicPage>
      <Stack mt="50px" spacing="95px" h="100%" w="100%">
        <ComicCarousel comics={comics} heading={`${date} Picks`} />
      </Stack>
    </BasicPage>
  );
}
