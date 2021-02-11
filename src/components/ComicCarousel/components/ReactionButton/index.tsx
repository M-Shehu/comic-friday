import { IconButton, Image } from "@chakra-ui/react";

type ReactionButtonType = {
  src: string;
  onClick?: () => void;
};
export function ReactionButton({ src, onClick }: ReactionButtonType) {
  return (
    <IconButton
      colorScheme="orange"
      _active={{
        transform: "scale(0.9)",
        bgColor: "primary.500",
      }}
      _hover={{
        boxShadow: "xl",
        transform: "translate(0, -5px)",
      }}
      bgColor="#8B6453"
      className="reaction-button"
      p={["10px", "15px", "20px"]}
      boxSize={["50px", "65px", "80px"]}
      onClick={onClick}
      aria-label="Funny button"
      isRound
      icon={<Image src={src} />}
    />
  );
}
