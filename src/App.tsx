import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
function App() {
  return (
    <Grid
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      templateRows={{ base: 'auto 1fr', lg: '60px 1fr' }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      h="100vh"
      
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" bg="dodgerblue" display={{ base: 'none', lg: 'block' }}>
        Aside
      </GridItem>
      <GridItem area="main" bg="limegreen">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
