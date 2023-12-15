import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { PokeInfo } from '../types/PokemonApiResponse';

interface PokeListProps {
    pokemon: PokeInfo;
}

export const PokeCard = ({ pokemon }: PokeListProps) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: pokemon.picture }} style={{ width: 150, height: 150 }} />
            <Text style={styles.pokemonTitle}>{pokemon.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
    },
    pokemonTitle: {
        textTransform: 'uppercase',
        fontSize: 32, // Adjust the font size as needed
        fontWeight: 'bold',
        fontStyle: 'italic',
        letterSpacing: 0, // Adjust the letter spacing as needed
        color: '#FF4500', // Choose a color that suits your design
        textAlign: 'center', // Align text in the center
        //   transform: [{ rotate: '-10deg' }], // Apply inclination
        marginBottom: 10, // Adjust spacing as needed
        marginLeft: 20,
        alignSelf: 'center'
    },
});