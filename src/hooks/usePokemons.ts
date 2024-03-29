import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { PokeApiResponse, PokeApiInfo, PokeInfo } from "../types/PokemonApiResponse";

export const usePokemons = () => {
    const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=40");
    const [isLoading, setIsLoading] = useState(false)
    const [pokemons, setPokemons] = useState<PokeInfo[]>([]);

    const loadPokemons = () => {
        setIsLoading(true);
        axios.get<PokeApiResponse>(nextPageUrl.current).then(response => {
            nextPageUrl.current = response.data.next;
            setPokemons([...pokemons, ...response.data.results.map(getPokeInfo)]);
            setIsLoading(false);
        });
    }


    useEffect(() => {
        loadPokemons();
    }, []);

    return { pokemons, isLoading, loadPokemons };
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