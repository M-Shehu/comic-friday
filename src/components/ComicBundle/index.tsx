import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Heading, Image, Stack } from "@chakra-ui/react";

import useComicBundle from "hooks/useComicBundle";
import fallback from "assets/images/fallback.png";
import { useComicBundleStore } from "store";

type ComicBundleType = {
  id: string;
  comics: string[];
  heading: string;
};

function ComicBundle({ heading, comics, id }: ComicBundleType) {
  const {
    bundleHeight,
    insertImageRef,
    boxRef,
    setImageLoaded,
  } = useComicBundle();
  const history = useHistory();
  const setCurrentPick = useComicBundleStore(state => state.setCurrentPick);

  const onBoxClick = () => {
    history.push(`/${id}`);
    setComicsToMap(comics);
    setCurrentPick(id);
    setIsExpanded(true);
  };

  const [comicsToMap, setComicsToMap] = useState(comics.slice(0, 3));
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Stack w="100%" align="center" spacing="20px" h="100%">
      <Heading size="md" fontFamily="merriweather">
        {heading}
      </Heading>
      <Box
        transition="all 0.5s"
        className="comics-container"
        pos="relative"
        justifyContent="space-between"
        alignItems="flex-start"
        ref={boxRef}
        h={isExpanded ? "100%" : `${bundleHeight}px`}
        w={isExpanded ? "100%" : "330px"}
        onClick={onBoxClick}
        {...(isExpanded && { display: "flex", overflowX: "auto" })}
      >
        {comicsToMap.map((comic, index) => (
          <Image
            pos={isExpanded ? "static" : "absolute"}
            className="comic"
            fallbackSrc={fallback}
            transition="all 0.5s"
            top={`${30 * index}px`}
            w={isExpanded ? "300px" : `${250 + index * 20}px`}
            ref={insertImageRef(index)}
            left="0"
            right="0"
            key={comic + index}
            m={isExpanded ? "0" : "auto"}
            onLoad={() => setImageLoaded(image => image + 1)}
            zIndex={index}
            boxShadow="2xl"
            src={comic}
            alt="Comic"
            {...(isExpanded && { mx: "20px" })}
          />
        ))}
      </Box>
    </Stack>
  );
}

export default ComicBundle;
