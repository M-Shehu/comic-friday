import { Image } from "@chakra-ui/image";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import BasicPage from "templates/BasicPage";
import Container from "templates/Container";
import useScrollToTop from "hooks/useScrollToTop";

import first from "assets/exclusive/comics/1.jpg";
import second from "assets/exclusive/comics/2.png";
import third from "assets/exclusive/comics/3.png";
import fourth from "assets/exclusive/comics/4.png";
import five from "assets/exclusive/comics/5.png";
import six from "assets/exclusive/comics/6.png";
import seven from "assets/exclusive/comics/7.png";
import eight from "assets/exclusive/comics/8.jpeg";
import nine from "assets/exclusive/comics/9.jpeg";
import ten from "assets/exclusive/comics/10.png";
import eleven from "assets/exclusive/comics/11.png";

import artfirst from "assets/exclusive/art/1.jpg";
import artsecond from "assets/exclusive/art/2.jpg";
import artthird from "assets/exclusive/art/3.jpg";
import artfourth from "assets/exclusive/art/4.gif";
import artfive from "assets/exclusive/art/5.gif";
import artsix from "assets/exclusive/art/6.gif";
import artseven from "assets/exclusive/art/7.gif";
import arteight from "assets/exclusive/art/8.jpg";
import artnine from "assets/exclusive/art/9.jpg";
import artten from "assets/exclusive/art/10.gif";
import arteleven from "assets/exclusive/art/11.jpeg";
import arttwelve from "assets/exclusive/art/12.jpeg";
import artthirteen from "assets/exclusive/art/13.jpeg";

import { useTheme } from "@chakra-ui/system";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";

export function ExclusiveClub1() {
  const theme = useTheme();
  const history = useHistory();
  useScrollToTop();
  const border = `5px solid ${theme.colors.primary["500"]}`;
  return (
    <BasicPage>
      <Container>
        <Stack spacing="30px">
          <Heading>Welcome to the comic black market 📈</Heading>
          <Text fontSize="lg">
            Here at the comic black market, we peddle comics rarer than freshly
            cut meat that's only accessible to 0.000000001% (1 person by rough
            estimates) of the population. Enjoy:
          </Text>
          <SimpleGrid columns={[1, 2]} spacing={10} px="10%">
            <Image boxShadow="2xl" border={border} src={first} />
            <Image boxShadow="2xl" border={border} src={second} />
            <Image boxShadow="2xl" border={border} src={third} />
            <Image boxShadow="2xl" border={border} src={fourth} />
            <Image boxShadow="2xl" border={border} src={five} />
            <Image boxShadow="2xl" border={border} src={six} />
            <Image boxShadow="2xl" border={border} src={seven} />
            <Image boxShadow="2xl" border={border} src={eight} />
            <Image boxShadow="2xl" border={border} src={nine} />
            <Image boxShadow="2xl" border={border} src={ten} />
            <Image boxShadow="2xl" border={border} src={eleven} />
          </SimpleGrid>
          <Text fontSize="lg">
            I'm sure you're thinking to yourself that was incredibly mid and
            you'd be right 😔. The comic black market hasn't been what it used
            to be since the pandemic started. The comic stock market is not
            immune to its effects.
          </Text>
          <Button
            onClick={() => history.push("/exclusive-club-2")}
            colorScheme="orange"
            bgColor="accent.500"
          >
            Sha take me to the other mid comics 😒
          </Button>
        </Stack>
      </Container>
    </BasicPage>
  );
}

export function ExclusiveClub2() {
  const theme = useTheme();
  const history = useHistory();
  useScrollToTop();
  const border = `5px solid ${theme.colors.primary["500"]}`;
  return (
    <BasicPage>
      <Container>
        <Stack spacing="30px">
          <Heading>True Louvre 🎨</Heading>
          <Text fontSize="lg">
            Sike 🌚! You thought we were done. Oh no no! I want to take the time
            to brag about my favorite artist; You ❤️!
            <br />
            <br />
            I've been exposed to your brilliance since 2018 and never has it
            stopped <del>shining</del> radianting. Every one of your work leaves
            me in awe just as the last did! Its like periodic amnesia. "Oh she's
            talented!" only to repeat the same words in shock a couple of months
            later. My only regret is I don't get to see more of it, which is why
            I'm obligated to celebrate the ones I've been honored to view
          </Text>
          <SimpleGrid columns={[1, 2]} spacing={10} px="10%">
            <Image boxShadow="2xl" border={border} src={artfirst} />
            <Image boxShadow="2xl" border={border} src={artsecond} />
            <Image boxShadow="2xl" border={border} src={artthird} />
            <Image boxShadow="2xl" border={border} src={artfourth} />
            <Image boxShadow="2xl" border={border} src={artfive} />
            <Image boxShadow="2xl" border={border} src={artsix} />
            <Image boxShadow="2xl" border={border} src={artseven} />
            <Image boxShadow="2xl" border={border} src={arteight} />
            <Image boxShadow="2xl" border={border} src={artnine} />
            <Image boxShadow="2xl" border={border} src={artten} />
            <Image boxShadow="2xl" border={border} src={arteleven} />
            <Image boxShadow="2xl" border={border} src={arttwelve} />
            <Image boxShadow="2xl" border={border} src={artthirteen} />
          </SimpleGrid>
          <Text fontSize="lg">
            If I haven't stressed enough, I'm your forever fan. Let me be the
            hyperbole to your modesty! You're destined for greatness and
            honestly, you don't really have a choice in the matter. I look
            forward to being with you through it every step of the way.
          </Text>
          <Button
            onClick={() => history.push("/")}
            colorScheme="orange"
            bgColor="accent.500"
          >
            Go to comics (For real this time)
          </Button>
        </Stack>
      </Container>
    </BasicPage>
  );
}
