import { SimpleGrid, Text } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";
import useData from "../hooks/useData";

const GameGrid = () => {
	const { data: games, error, isLoading } = useData<Game>("/games");

	return (
		<>
			{error && <Text>{error}</Text>}
			{isLoading && (
				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
					padding={4}
					spacing={4}
				>
					{Array.from({ length: 15 }).map((_, index) => (
						<GameCardSkleton key={index} />
					))}
				</SimpleGrid>
			)}
			<SimpleGrid
				columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
				padding={4}
				spacing={4}
			>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
