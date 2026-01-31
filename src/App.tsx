import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({
		searchText: "",
		genre: null,
		platform: null,
		sortOrder: "",
	} as GameQuery);

	return (
		<Grid
			templateColumns={{ base: "1fr", lg: "200px 1fr" }}
			templateRows={{ base: "auto 1fr", lg: "60px 1fr" }}
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			h="100vh"
		>
			<GridItem area="nav" paddingBottom={2}>
				<NavBar
					onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
				/>
			</GridItem>
			<GridItem
				area="aside"
				display={{ base: "none", lg: "block" }}
				paddingX={5}
				paddingY={2}
			>
				<GenreList
					selectedGenre={gameQuery.genre}
					onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
				/>
			</GridItem>
			<Box paddingX={4}>
				<HStack spacing={5} paddingLeft={4} marginBottom={5} marginTop={5}>
					<PlatformSelector
						onSelectPlatform={(platform) =>
							setGameQuery({ ...gameQuery, platform })
						}
						selectedPlatform={gameQuery.platform}
					/>

					<SortSelector
						onSelectSortOrder={(sortOrder) =>
							setGameQuery({ ...gameQuery, sortOrder })
						}
						sortOrder={gameQuery.sortOrder}
					/>
				</HStack>
				<GridItem area="main">
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Box>
		</Grid>
	);
}

export default App;
