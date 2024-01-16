import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PokeInfo } from '../types/PokemonApiResponse';
import { default as colors } from "../assets/colors.json";
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../theme/AppTheme';

interface PokeCardProps {
    pokemon: PokeInfo;
    size?: "large" | "small";
}

export const PokeCard = ({ pokemon, size }: PokeCardProps) => {
    const [bgColor, setBgColor] = useState('gray');
    const navigation = useNavigation<any>();
    const styles = size === "small" ? sStyles : lgStyles;

    useEffect(() => {
        // This is a work around to set some colors to the card since the tool to extract colors from pokemons is not working
        const rndIndex = Math.floor((Math.random() * colors.length));
        setBgColor(colors[rndIndex]);
    }, [pokemon]);

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("Details", { ...pokemon, color: bgColor })}>
            <View style={{ ...styles.card, backgroundColor: bgColor }}>
                <Image source={{ uri: pokemon.picture }} style={styles.pokeImage} />
                <Text style={{ ...globalStyles.pokemonTitle, fontSize: size === 'small' ? 18 : 32 }}>{pokemon.name}{'\n#' + pokemon.id}</Text>
                <View style={styles.pokeBallWrapper}>
                    <Image source={require("../assets/white-pokeball.png")} style={styles.pokeBall} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
const lgStyles = StyleSheet.create({
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
    }
});

const sStyles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "gray",
        justifyContent: 'flex-end',
        padding: 10,
        margin: 10,
        marginHorizontal: 13,
        borderRadius: 10,
        height: 120,
        width: 170
    },
    pokeImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        left: -15,
        bottom: -15,
        zIndex: 1
    },
    pokeBallWrapper: {
        width: 100,
        height: 100,
        right: 0,
        top: 0,
        position: 'absolute',
        overflow: 'hidden'
    },
    pokeBall: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -30,
        top: -30,
        opacity: 0.3
    }
});