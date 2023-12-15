import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { PokeInfo } from '../types/PokemonApiResponse';
import { PokeCard } from './PokeCard';

interface PokeListProps {
    pokemons: PokeInfo[];
}

export const PokeList = ({ pokemons }: PokeListProps) => {
    return (
        <FlatList
            data={pokemons}
            renderItem={(item) => <PokeCard pokemon={item.item} />}
        />
    )
}