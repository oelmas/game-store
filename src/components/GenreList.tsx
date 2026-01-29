import { List, ListItem, Spinner, Image, HStack, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
