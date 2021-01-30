import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import useComicBundleHeight from "hooks/useComicBundleHeight";

type ComicBundleType = {
  comics: string[];
  heading: string;
};

function ComicBundle({ heading, comics }: ComicBundleType) {
  const { bundleHeight, insertRef, setImageLoaded } = useComicBundleHeight();

  return (
    <Stack align="center">
      <Heading size="md" fontFamily="merriweather">
        {heading}
      </Heading>
      <Box
        pos="relative"
        justify="space-between"
        h={`${bundleHeight}px`}
        w="330px"
      >
        {comics.map((comic, index) => (
          <Image
            pos="absolute"
            top={`${30 * index}px`}
            w={`${250 + index * 20}px`}
            ref={insertRef(index)}
            left="0"
            right="0"
            key={comic + index}
            m="auto"
            onLoad={() => setImageLoaded(image => image + 1)}
            zIndex={index}
            boxShadow="2xl"
            src={comic}
            alt="Comic"
          />
        ))}
      </Box>
    </Stack>
  );
}

export default ComicBundle;
