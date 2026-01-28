import {
  Card,
  CardBody,
  Image,
  Divider,
  Heading,
  HStack,
} from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card
      overflow="hidden"
      bg="gray.600"
      borderRadius={10}
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "dark-lg",
        bgColor: "gray.700",
      }}
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        height="100%"
        width="100%"
        objectFit="cover"
      />
      <Divider />
      <HStack justifyContent="space-between" marginX={2} marginY={1}>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
        <CriticScore score={game.metacritic} />
      </HStack>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
