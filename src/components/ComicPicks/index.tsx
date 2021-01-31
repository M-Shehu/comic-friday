import { HStack } from "@chakra-ui/react";
import ComicBundle from "components/ComicBundle";

import { useComicBundleStore } from "store";

type ComicPicksType = {
  comicPicks: {
    id: string;
    date: string;
    comics: string[];
  }[];
};

function ComicPicks({ comicPicks }: ComicPicksType) {
  const currentPick = useComicBundleStore(state => state.currentPick);

  return (
    <HStack w="100%" justify="center" align="center" h="100%">
      {comicPicks.map(
        pick =>
          (currentPick === pick.id || !currentPick) && (
            <ComicBundle
              key={pick.id}
              id={pick.id}
              heading={`${pick.date} Picks`}
              comics={pick.comics}
            />
          )
      )}
    </HStack>
  );
}

export default ComicPicks;
