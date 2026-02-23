import { StrictMode } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App.tsx";
import theme from "./theme";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const queryClient = new QueryClient();

createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
);
