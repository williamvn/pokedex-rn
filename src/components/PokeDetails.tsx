import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { PokeInfo } from '../types/PokemonApiResponse'
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { globalStyles } from '../theme/AppTheme';

interface PokeDetailsProps {
    pokemon: PokeInfo;
}

export const PokeDetails = ({ pokemon }: PokeDetailsProps) => {
    const { pokemonDetails, isLoading } = usePokemonDetails(pokemon);
    return (
        !isLoading ?
            <View style={globalStyles.container}>
                <View style={styles.subheader}>
                    <Text style={globalStyles.textHeader}>Types</Text>
                    <Text style={globalStyles.text}>{pokemonDetails?.types.map(type => type.type.name).join(", ")}</Text>
                </View>
                <View style={styles.subheader}>
                    <Text style={globalStyles.textHeader}>Abilities</Text>
                    <Text style={globalStyles.text}>{pokemonDetails?.abilities.map(skill => skill.ability.name).join(", ")}</Text>
                </View>
                <View style={styles.subheader}>
                    <Text style={globalStyles.textHeader}>Stats</Text>
                    {pokemonDetails?.stats.map(stat => <View key={stat.stat.name} style={{ flexDirection: 'row', justifyContent: 'space-between',  }}>
                        <Text style={globalStyles.text}>{stat.stat.name}</Text>
                        <Text style={globalStyles.text}>{stat.base_stat}</Text>
                    </View>
                    )}
                </View>
                <View style={styles.subheader}>
                    <Text style={globalStyles.textHeader}>Sprites</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        {pokemonDetails?.sprites.back_default && <Image source={{ uri: pokemonDetails?.sprites.back_default }} style={styles.spriteImg} />}
                        {pokemonDetails?.sprites.front_default && <Image source={{ uri: pokemonDetails?.sprites.front_default }} style={styles.spriteImg} />}
                        {pokemonDetails?.sprites.back_shiny && <Image source={{ uri: pokemonDetails?.sprites.back_shiny }} style={styles.spriteImg} />}
                        {pokemonDetails?.sprites.front_shiny && <Image source={{ uri: pokemonDetails?.sprites.front_shiny }} style={styles.spriteImg} />}
                    </View>
                </View>
            </View> : <ActivityIndicator size={100} color={pokemon.color} />
    )
}

const styles = StyleSheet.create({
    subheader: {
        marginVertical: 10
    },
    spriteImg: { width: 90, height: 90 }
});