import {
	List,
	ListItem,
	Spinner,
	Image,
	HStack,
	VStack,
	Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import type { Genre } from "../hooks/useGenres";

interface Props {
	onSelectGenre: (genre: Genre | null) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, error, isLoading } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	const displayGenres = selectedGenre ? [selectedGenre] : genres;

	return (
		<VStack align="stretch" gap={1}>
			<Button
				variant="ghost"
				size="sm"
				justifyContent="flex-start"
				colorScheme="gray.900"
				onClick={() => {
					if (selectedGenre !== null) onSelectGenre(null);
				}}
				fontWeight={selectedGenre === null ? "bold" : "normal"}
				marginTop={5}
				marginBottom={5}
			>
				All Genres
			</Button>
			<List marginY={2}>
				{displayGenres.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								objectFit="cover"
								boxSize="42px"
								borderRadius="8px"
							/>
							<Button
								variant="link"
								whiteSpace="normal"
								textAlign="left"
								overflow="hidden"
								textOverflow="ellipsis"
								onClick={() => onSelectGenre(genre)}
								fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</VStack>
	);
};

export default GenreList;
