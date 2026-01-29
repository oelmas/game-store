import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkleton from "./GameCardSkleton";
import type { Genre } from "../hooks/useGenres";
import useGames from "../hooks/useGames";

interface Props {
	selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
	const { data: games, error, isLoading } = useGames(selectedGenre);

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
