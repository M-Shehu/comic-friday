import BasicPage from "templates/BasicPage";
import MailingList from "components/MailingList";
import ComicPicks from "components/ComicPicks";

import { comicPicks } from "mocks";
import Container from "templates/Container";

export default function Home() {
  return (
    <BasicPage>
      <Container flexDir={["column-reverse", "column"]} h="100%">
        <ComicPicks comicPicks={comicPicks} />
        <MailingList />
      </Container>
    </BasicPage>
  );
}
