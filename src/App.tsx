import {
  ChakraProvider,
  theme,
  Container
} from "@chakra-ui/react";
import { PokemonList } from "./components/PokemonList";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'container.sm'}>
        <PokemonList/>
      </Container>
    </ChakraProvider>
  )
}
