import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type TrackVisibilityType = {
  children: React.ReactNode;

  onVisible: (entry: IntersectionObserverEntry | undefined) => void;
};

export function TrackVisibility({ children, onVisible }: TrackVisibilityType) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    rootMargin: "0px -10%",
  });

  useEffect(() => {
    if (inView) {
      onVisible(entry);
    }
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box h="100%" ref={ref}>
      {children}
    </Box>
  );
}
