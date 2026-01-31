import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

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

			<GridItem area="main">
				<Box paddingLeft={4}>
					<GameHeading gameQuery={gameQuery} />
					<Flex gap={5}>
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
					</Flex>
				</Box>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
