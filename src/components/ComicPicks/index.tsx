import { Stack } from "@chakra-ui/react";
import ComicBundle from "components/ComicBundle";
import { ComicType } from "interfaces";

type ComicPicksType = {
  comicPicks: {
    id: string;
    date: string;
    comics: ComicType[];
  }[];
};

function ComicPicks({ comicPicks }: ComicPicksType) {
  return (
    <Stack
      flex="5"
      direction={["column", "column", "column", "row"]}
      w="100%"
      justify="center"
      align="flex-start"
      pb="50px"
      pt={["50px", 0]}
      h="100%"
      spacing="50px"
    >
      {comicPicks.map(pick => (
        <ComicBundle
          key={pick.id}
          id={pick.id}
          heading={`${pick.date} Picks`}
          comics={pick.comics}
        />
      ))}
    </Stack>
  );
}

export default ComicPicks;
