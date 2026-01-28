import { Card, CardBody, Image, Divider, Heading,Text,HStack } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";



interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image} alt={game.name} height="100%" width="100%" objectFit="cover" />
      <Divider />
      <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card> 
  );
};  

export default GameCard;
