import { PokemonCard } from "./PokemonCard/PokemonCard";
import { SimpleGrid ,Center } from "@chakra-ui/react";
import { getPokemonList } from "../Api/Api";
import { useLoaderData } from "react-router-dom";



export const loader = async () =>{
    const pokemon = await getPokemonList();
    return pokemon ;
  }

export const PokemonList = ({inputText} : {inputText : string}) => {
    const pokemonList : any = useLoaderData();

     return(
        <>
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