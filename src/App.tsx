import {
  ChakraProvider,
  theme,
  Container
} from "@chakra-ui/react";
import { PokemonList } from "./components/PokemonList";
import { Header } from "./components/Header";
import { useState } from "react";

export const App = () => {
  const [inputText, setInputText] = useState("");

  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'container.sm'}>
        <Header inputText={inputText} setInputText={setInputText}></Header>
        <PokemonList inputText={inputText}/>
      </Container>
    </ChakraProvider>
  )
}
