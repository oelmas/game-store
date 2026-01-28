import {
  Card,
  CardBody,
  Image,
  Divider,
  Heading,
} from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";

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
        src={game.background_image}
        alt={game.name}
        height="100%"
        width="100%"
        objectFit="cover"
      />
      <Divider />
      <PlatformIconList
        platforms={game.parent_platforms.map(({ platform }) => platform)}
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
