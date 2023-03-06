import { PokemonCard } from "./PokemonCard/PokemonCard";
import { SimpleGrid, Input, Box, Image, Text, Center } from "@chakra-ui/react";
import { getPokemonList } from "../Api/Api";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const POKEMON_SRC = "https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png";
export const loader = async () =>{
    const pokemon = await getPokemonList();
    return pokemon ;
  }

export const PokemonList = () => {
    const [inputText, setInputText] = useState("");
    const pokemonList : any = useLoaderData();

     return(
        <>
            <Box my={'10'} alignItems={'center'}>
                <Image src={POKEMON_SRC} my={5}></Image>
                <Text textAlign={'center'} fontWeight={'bold'} my={5}>SEARCH A POKEMON</Text>
                <Input value={inputText} onChange={(e) => setInputText(e.target.value)} />
            </Box>
            <Center>
                <SimpleGrid columns={[1, 2, null, 3]} spacing={4}>
                    { 
                        pokemonList.filter((p : any) =>  p.name.includes(inputText.toLowerCase())).map((pokemon : any) => {
                            return(<PokemonCard key={pokemon.id} pokemon={pokemon}/>);
                        } 
                    )
                    }
                </SimpleGrid>
            </Center>
        </>
        
     );
}