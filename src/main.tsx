import { StrictMode } from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import theme from './theme'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>,
)
