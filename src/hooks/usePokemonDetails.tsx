import { useEffect, useState } from 'react'
import { FullPokeInfo, PokeInfo } from '../types/PokemonApiResponse';
import axios from 'axios';

export const usePokemonDetails = (pokemon: PokeInfo) => {
    const [isLoading, setIsLoading] = useState(false)
    const [pokemonDetails, setPokemonDetails] = useState<FullPokeInfo>();
    useEffect(() => {
        setIsLoading(true);
        axios.get<FullPokeInfo>(pokemon.url).then(response => {
            setPokemonDetails(response.data);
            setIsLoading(false);
        });
    }, [pokemon]);

    return { pokemonDetails, isLoading };
}