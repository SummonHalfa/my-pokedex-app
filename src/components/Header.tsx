import { Input, Box, Image, Text} from "@chakra-ui/react";

const POKEMON_SRC = "https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG3.png";

export const Header = ( { inputText , setInputText} : { inputText: string, setInputText : (input : string) => void}) => {
    

    return (
        <Box my={'10'} alignItems={'center'}>
            <Image src={POKEMON_SRC} my={5}></Image>
            <Text textAlign={'center'} fontWeight={'bold'} my={5}>SEARCH A POKEMON</Text>
            <Input value={inputText} onChange={(e) => setInputText(e.target.value)} />
        </Box>
    )
}