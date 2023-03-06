import "./pokemonType.css";
import { Card, CardHeader, CardBody, CardFooter} from '@chakra-ui/react'
import { Image, Switch , Heading, Badge, Text, Box } from '@chakra-ui/react';
import { useState } from "react";
import { stringFormatter } from '../../misc/stringFormatter';

export const PokemonCard = ({pokemon} : any) => {
    const [shiny, setShiny] = useState(false);

     return (
        <Card maxW={['300px']}>
            <CardHeader>
                <Heading size='md'>{stringFormatter(pokemon.name)} </Heading>
            </CardHeader>
            <CardBody>
            <Box
                className={pokemon.types[0].type.name}
                borderRadius="lg"
                position="relative"
                alignItems="center"
                justifyContent="center"
                borderWidth="2px"
                >
                <Badge ml={1}> 
                    {pokemon.id}
                </Badge>
                <Image
                height="140px"
                src={shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
                alt={pokemon.species.name}
                alignSelf={'center'}
                />
            </Box>
                { pokemon.types.map(({slot , type} : { slot : number, type : any} ) => 
                    <Badge className={type.name} key={slot} borderRadius={'full'} px={2} mr={1}> 
                            {type.name}
                    </Badge>
                    )
                }
            </CardBody>
            <CardFooter>
                <Text fontSize={'md'} fontWeight={'bold'} mr={2}> Shiny</Text><Switch colorScheme='yellow' size='lg' onChange={() => setShiny(!shiny)}/>
            </CardFooter>
        </Card>  
     );
}