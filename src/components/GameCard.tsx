import {
	Box,
	Card,
	CardBody,
	Divider,
	Heading,
	HStack,
	Image,
} from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
	game: Game;
}
const GameCard = ({ game }: Props) => {
	return (
		<GameCardContainer>
			<Card
				height="100%"
				bg="gray.700"
				role="group"
				transition="box-shadow 0.2s ease, background-color 0.2s ease"
				_hover={{
					boxShadow: "lg",
					bg: "gray.600",
				}}
			>
				<Box overflow="hidden">
					<Image
						src={getCroppedImageUrl(game.background_image)}
						alt={game.name}
						width="100%"
						objectFit="cover"
						transition="transform 0.6s ease-out"
						_groupHover={{ transform: "scale(1.08)" }}
					/>
				</Box>
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
		</GameCardContainer>
	);
};

export default GameCard;
