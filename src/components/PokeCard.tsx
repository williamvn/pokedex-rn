import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PokeInfo } from '../types/PokemonApiResponse';
import { default as colors} from "../assets/colors.json";

interface PokeListProps {
    pokemon: PokeInfo;
}


export const PokeCard = ({ pokemon }: PokeListProps) => {
    const [bgColor, setBgColor] = useState('gray')

    useEffect(() => {
        // This is work around to set some colors to the card since the tool to extract colors from pokemons is not working
        const rndIndex = Math.floor((Math.random() * colors.length)); 
        setBgColor(colors[rndIndex])
    }, [pokemon]);


    return (
        <View style={{ ...styles.card, backgroundColor: bgColor }}>
            <Image source={{ uri: pokemon.picture }} style={styles.pokeImage} />
            <Text style={styles.pokemonTitle}>{pokemon.name}{'\n#' + pokemon.id}</Text>
            <View style={styles.pokeBallWrapper}>
                <Image source={require("../assets/white-pokeball.png")} style={styles.pokeBall} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "gray",
        justifyContent: 'flex-end',
        padding: 10,
        margin: 10,
        marginHorizontal: 13,
        borderRadius: 10,
        height: 150
    },
    pokeImage: {
        width: 170,
        height: 170,
        position: 'absolute',
        left: -20,
        bottom: -20,
        zIndex: 1
    },
    pokeBallWrapper: {
        width: 200,
        height: 150,
        right: 0,
        bottom: 0,
        position: 'absolute',
        overflow: 'hidden'
    },
    pokeBall: {
        width: 200,
        height: 200,
        position: 'absolute',
        right: -30,
        bottom: -30,
        opacity: 0.3
    },
    pokemonTitle: {
        textTransform: 'uppercase',
        fontSize: 32,
        fontWeight: 'bold',
        fontStyle: 'italic',
        letterSpacing: 0,
        color: 'white',
        opacity: 0.9,
        textAlign: 'right', 
        marginBottom: 10, 
        marginLeft: 20,
    },
});