import { useHistory } from "react-router-dom";
import { Box, Heading, Image, Stack } from "@chakra-ui/react";

import useComicBundle from "hooks/useComicBundle";
import fallback from "assets/images/fallback.png";

import "./styles/index.css";
import { ComicType } from "interfaces";

function ComicBundle({
  heading,
  comics,
  slug,
}: {
  heading: string;
  comics: ComicType[];
  slug: string;
}) {
  const {
    bundleHeight,
    insertImageRef,
    boxRef,
    setImageLoaded,
  } = useComicBundle();
  const history = useHistory();

  const onBoxClick = () => history.push(`/single-pick/${slug}`);

  return (
    <Stack w="100%" align="center" spacing="20px">
      <Heading size="md" fontFamily="merriweather">
        {heading}
      </Heading>
      <Box
        className="comics-container"
        pos="relative"
        justifyContent="space-between"
        alignItems="flex-start"
        ref={boxRef}
        h={`${bundleHeight}px`}
        w="330px"
        onClick={onBoxClick}
      >
        {comics.slice(0, 3).map((comic, index) => (
          <Image
            pos="absolute"
            className="comic"
            fallbackSrc={fallback}
            top={`${30 * index}px`}
            w={`${250 + index * 20}px`}
            ref={insertImageRef(index)}
            left="0"
            right="0"
            key={index}
            m="auto"
            onLoad={() => setImageLoaded(image => image + 1)}
            zIndex={index}
            boxShadow="2xl"
            src={`${process.env.REACT_APP_API_URL}${comic.imgSrc[0].formats?.small?.url}`}
            alt="Comic"
          />
        ))}
      </Box>
    </Stack>
  );
}

export default ComicBundle;
