import axios from "axios";


export const getPokemon = async ( id : number) => {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return data;
}


export const getPokemonList = async () => {
    const pokemonList = [];

    for(let i = 1 ; i<= 151; i++)
        pokemonList.push(await getPokemon(i));

    return pokemonList;
}