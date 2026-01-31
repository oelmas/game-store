import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	return (
		<Heading as="h1" fontSize="5xl" marginY={4}>
			{gameQuery.genre?.name || ""} {gameQuery.platform?.name || ""} Games
		</Heading>
	);
};

export default GameHeading;
