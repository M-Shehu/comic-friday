import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Heading,
  Box,
  Image,
  Flex,
  Stack,
  HStack,
  Text,
  IconButton,
  Grid,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

import Container from "templates/Container";
import { TrackVisibility } from "components/TrackVisibility";
import { ComicType } from "interfaces";

import fallback from "assets/images/fallback.png";
import laughButton from "assets/images/laugh-button.png";
import cuteButon from "assets/images/cute-button.png";
import striaghtFaceButton from "assets/images/straight-face-button.png";
import { IndicatorDots } from "./components/IndicatorDots";

type ComicCarouselType = {
  comics: ComicType[];
  heading: string;
};

export default function ComicCarousel({ heading, comics }: ComicCarouselType) {
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Stack
      w="100%"
      align="center"
      spacing="20px"
      h="100%"
      overflowX="hidden"
      pt="50px"
    >
      <HStack spacing={["10px", "20px"]}>
        <Heading
          size="lg"
          fontSize={["20px", "24px"]}
          fontFamily="merriweather"
        >
          {heading}
        </Heading>
        <IconButton
          variant="ghost"
          colorScheme="orange"
          size="lg"
          color="accent.500"
          aria-label="Close button"
          onClick={() => history.goBack()}
          icon={<CloseIcon />}
        />
      </HStack>
      <Grid
        autoFlow="column"
        autoColumns={["72%", "65%", "50%"]}
        pb="30px"
        templateRows="100%"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        className="comics-container"
        justifyContent="space-between"
        alignItems="flex-start"
        w="100%"
        overflowX="auto"
      >
        <Box minW="300px" h="300px"></Box>
        {comics.map((comic, index) => (
          <Flex key={"carousel" + index} justify="center">
            <TrackVisibility onVisible={() => setCurrentIndex(index)}>
              <Image
                className="comic"
                fallbackSrc={fallback}
                w={["250px", "300px"]}
                id={index.toString()}
                boxShadow={["lg", "2xl"]}
                src={comic.imgSrc}
                alt="Comic"
              />
            </TrackVisibility>
          </Flex>
        ))}
        <Box minW="300px" h="300px"></Box>
      </Grid>
      <Container>
        <Stack align="center" spacing="25px">
          <IndicatorDots comics={comics} currentIndex={currentIndex} />

          <HStack justify="center" spacing="8">
            <IconButton
              colorScheme="orange"
              bgColor="#8B6453"
              p={["10px", "15px", "20px"]}
              boxSize={["50px", "65px", "80px"]}
              aria-label="Funny button"
              isRound
              icon={<Image src={laughButton} />}
            />
            <IconButton
              colorScheme="orange"
              p={["10px", "15px", "20px"]}
              bgColor="#8B6453"
              boxSize={["50px", "65px", "80px"]}
              aria-label="cute button"
              isRound
              icon={<Image src={cuteButon} />}
            />
            <IconButton
              colorScheme="orange"
              p={["10px", "15px", "20px"]}
              bgColor="#8B6453"
              boxSize={["50px", "65px", "80px"]}
              aria-label="straight face button"
              isRound
              icon={<Image src={striaghtFaceButton} />}
            />
          </HStack>
          <Text
            mt="40px"
            textAlign="center"
            fontSize={["md", "xl"]}
            fontWeight="bold"
          >
            Artist: {comics[currentIndex].artist}
          </Text>
        </Stack>
      </Container>
    </Stack>
  );
}
