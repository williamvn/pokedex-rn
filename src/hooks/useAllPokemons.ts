import axios from "axios";
import { useEffect, useState } from "react";
import { PokeApiResponse, PokeApiInfo, PokeInfo } from "../types/PokemonApiResponse";

export const useAllPokemons = () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=120";
    const [isLoading, setIsLoading] = useState(false)
    const [pokemons, setPokemons] = useState<PokeInfo[]>([]);
    useEffect(() => {
        setIsLoading(true);
        console.log("Getting Full pokemon list");
        axios.get<PokeApiResponse>(url).then(response => {
            setPokemons([...pokemons, ...response.data.results.map(getPokeInfo)]);
            setTimeout(() => {
                setIsLoading(false);
            }, 5000)
        });
    }, []);

    return { pokemons, isLoading };
}

const getPokeInfo = (pokemon: PokeApiInfo): PokeInfo => {
    const parsedUrl = pokemon.url.split('/');
    const id = parsedUrl[parsedUrl.length - 2];
    return {
        id,
        name: pokemon.name,
        picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        url: pokemon.url
    }
}