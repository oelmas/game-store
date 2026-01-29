import { List, ListItem, Spinner, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data: genres, error, isLoading } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id}>
					<Image
						src={getCroppedImageUrl(genre.image_background)}
						objectFit="cover"
						boxSize="42px"
						borderRadius="8px"
					/>
					{genre.name}
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
