import { useQuery } from "react-query";
import { Stack } from "@chakra-ui/react";

import BasicPage from "templates/BasicPage";
import ComicCarousel from "components/ComicCarousel";
import { useParams } from "react-router-dom";
import { fetchComicPick } from "api/comics";
import LoadingIcon from "components/LoadingIcon";
import formatDate from "utils/formatDate";

export default function ComicPick() {
  const { comicPickId } = useParams<{ comicPickId: string }>();

  const result = useQuery(["comicsPicks", comicPickId], () =>
    fetchComicPick(comicPickId)
  );

  return result.isLoading ? (
    <LoadingIcon />
  ) : (
    <BasicPage>
      <Stack spacing="95px" h="100%" w="100%">
        <ComicCarousel
          comics={result.data[0].comics}
          heading={`${formatDate(result.data[0].date)} Picks`}
        />
      </Stack>
    </BasicPage>
  );
}
