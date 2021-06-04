import { useQuery } from "react-query";

import BasicPage from "templates/BasicPage";
import MailingList from "components/MailingList";
import ComicPicks from "components/ComicPicks";

import Container from "templates/Container";
import { fetchComicsCount, fetchComicsPage } from "api/comics";
import LoadingIcon from "components/LoadingIcon";
import { ComicBundleType } from "interfaces";
import { useParams } from "react-router-dom";

export default function Home() {
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
      <Container flexDir={["column-reverse", "column"]} h="100%">
        <ComicPicks comicPicks={comicPicks} numberOfPages={numberOfPages} />
        <MailingList />
      </Container>
    </BasicPage>
  );
}
