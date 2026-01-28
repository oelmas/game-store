import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
          padding="10"
          spacing={6}
        >
          {Array.from({ length: 15 }).map((_, index) => (
            <GameCardSkleton key={index} />
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        padding="10"
        spacing={6}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
