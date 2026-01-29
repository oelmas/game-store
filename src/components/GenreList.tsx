import {
	List,
	ListItem,
	Spinner,
	Image,
	HStack,
	Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import type { Genre } from "../hooks/useGenres";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, error, isLoading } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<List marginY={2}>
			{genres.map((genre) => (
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
	);
};

export default GenreList;
