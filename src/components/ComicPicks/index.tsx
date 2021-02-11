import { Button, HStack, Stack, Image } from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";

import ComicBundle from "components/ComicBundle";
import { ComicBundleType } from "interfaces";
import leftArrow from "assets/svg/left-arrow.svg";
import rightArrow from "assets/svg/right-arrow.svg";
import formatDate from "utils/formatDate";

type ComicPicksType = {
  comicPicks: ComicBundleType[] | undefined;
  numberOfPages: number;
};

function ComicPicks({ comicPicks, numberOfPages }: ComicPicksType) {
  const { currentPage } = useParams<{ currentPage: string }>();
  const history = useHistory();
  const isOnFirstPage = +currentPage === 1;
  const isOnLastPage = +currentPage === numberOfPages;
  const onGoToNextPage = () => history.push(`/picks/${+currentPage + 1}`);
  const onGoToPrevPage = () => history.replace(`/picks/${+currentPage - 1}`);

  return (
    <Stack>
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
        {comicPicks &&
          comicPicks.map(pick => (
            <ComicBundle
              key={pick.id}
              slug={pick.slug}
              heading={`${formatDate(pick.date)} Picks`}
              comics={pick.comics}
            />
          ))}
      </Stack>
      <HStack justify={isOnFirstPage ? "flex-end" : "space-between"}>
        {!isOnFirstPage && (
          <Button
            colorScheme="orange"
            color="accent.500"
            size="sm"
            variant="ghost"
            onClick={onGoToPrevPage}
            leftIcon={<Image src={leftArrow} />}
          >
            Newer picks
          </Button>
        )}
        {!isOnLastPage && (
          <Button
            colorScheme="orange"
            color="accent.500"
            size="sm"
            variant="ghost"
            onClick={onGoToNextPage}
            rightIcon={<Image src={rightArrow} />}
          >
            Older picks
          </Button>
        )}
      </HStack>
    </Stack>
  );
}

export default ComicPicks;
