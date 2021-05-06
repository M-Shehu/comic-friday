import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { CloseIcon } from "@chakra-ui/icons";

import Container from "templates/Container";
import { TrackVisibility } from "components/TrackVisibility";
import { ComicType } from "interfaces";

import fallback from "assets/images/fallback.png";
import laughButton from "assets/images/laugh-button.png";
import cuteButon from "assets/images/cute-button.png";
import striaghtFaceButton from "assets/images/straight-face-button.png";
import { IndicatorDots } from "./components/IndicatorDots";
import { useMediaQuery } from "react-responsive";
import { ReactionButton } from "./components/ReactionButton";
import { BiShareAlt } from "react-icons/bi";

type ComicCarouselType = {
  comics: ComicType[];
  heading: string;
};

export default function ComicCarousel({ heading, comics }: ComicCarouselType) {
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentComic = 0 } = useParams<{ currentComic: string }>();
  const toast = useToast();
  const currentComicRef = useRef<HTMLImageElement>(null);

  const currentUrl = window.location.href;
  const urlComic = Number(currentComic);
  const imageToShare =
    comics[urlComic]?.imgSrc[0]?.formats?.small?.url ||
    comics[urlComic]?.imgSrc[0]?.formats?.thumbnail?.url;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (currentComic && currentComicRef.current) {
      currentComicRef.current.scrollIntoView();
    }
  }, [currentComic]);

  const onShare = () => {
    const rootPath = window.location.pathname.split("/").slice(0, 3).join("/");
    const linkToShare = `https://${window.location.hostname}${rootPath}/${
      currentIndex + 1
    }`;
    if (navigator.share) {
      navigator
        .share({
          title: "Comic Fridays comic",
          text: "Check out this comic on https://comicfridays.app",
          url: linkToShare,
        })
        .then(() => console.log("Successful share"))
        .catch(error => console.log("Error sharing", error));
    } else {
      navigator.clipboard.writeText(linkToShare);
      toast({
        title: "Link copied!",
        description: "The link to this comic has been copied! Paste to share",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Comic Fridays" />
        <meta
          property="og:description"
          content="New curated comics every first Friday of the month"
        />
        <meta property="og:image" content={imageToShare} />
        <meta property="og:url" content={currentUrl} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content="Comic Fridays" />
        <meta name="twitter:image:alt" content="A comic from comic fridays" />
      </Helmet>
      <Stack
        w="100%"
        align="center"
        spacing="20px"
        h="100%"
        overflowX="hidden"
        pt="50px"
      >
        <HStack spacing={["10px", "20px"]}>
          <IconButton
            variant="ghost"
            colorScheme="orange"
            size="lg"
            color="accent.500"
            aria-label="Close button"
            onClick={onShare}
            icon={<BiShareAlt style={{ height: "1.5em", width: "1.5em" }} />}
          />
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
            "&::-webkit-scrollbar": { display: "none" },
          }}
          {...(isTabletOrMobile && { templateColumns: "50px" })}
          className="comics-container"
          justifyContent="space-between"
          alignItems="flex-start"
          w="100%"
          overflowX="auto"
          overflowY="hidden"
        >
          <Box boxSize={["100px", "200px", "300px"]}></Box>
          {comics.map((comic, index) => (
            <Flex key={"carousel" + index} justify="center">
              <TrackVisibility onVisible={() => setCurrentIndex(index)}>
                <Image
                  onClick={onOpen}
                  className="comic"
                  fallbackSrc={fallback}
                  w={["250px", "300px"]}
                  id={index.toString()}
                  {...(index === +currentComic && { ref: currentComicRef })}
                  boxShadow={["lg", "2xl"]}
                  src={
                    comic?.imgSrc[0]?.formats?.small?.url ||
                    comic?.imgSrc[0]?.formats?.thumbnail?.url
                  }
                  alt="Comic"
                />
              </TrackVisibility>
            </Flex>
          ))}
          <Box boxSize={["100px", "200px", "300px"]}></Box>
        </Grid>
        <Container>
          <Stack align="center" spacing="25px">
            <IndicatorDots comics={comics} currentIndex={currentIndex} />

            <HStack justify="center" spacing="8">
              <ReactionButton src={laughButton} />
              <ReactionButton src={cuteButon} />
              <ReactionButton src={striaghtFaceButton} />
            </HStack>
            <Text
              mt="40px"
              textAlign="center"
              fontSize={["md", "xl"]}
              fontWeight="bold"
            >
              Artist:{" "}
              {comics[currentIndex] ? (
                <Link
                  href={comics[currentIndex].artistLink}
                  isExternal
                  variant="link"
                >
                  {comics[currentIndex]?.artist}
                </Link>
              ) : (
                "Unknown"
              )}
            </Text>
          </Stack>
        </Container>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent my="auto">
            <ModalCloseButton />
            <Image
              fallbackSrc={fallback}
              width="100%"
              src={
                comics[currentIndex]?.imgSrc[0]?.formats?.small?.url ||
                comics[currentIndex]?.imgSrc[0]?.formats?.thumbnail?.url
              }
            />
            <ModalBody></ModalBody>
          </ModalContent>
        </Modal>
      </Stack>
    </>
  );
}
