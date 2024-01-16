import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigators/HomeStackNavigator'
import Icon from "react-native-vector-icons/Ionicons";
import { PokeDetails } from '../components/PokeDetails';
import { globalStyles } from '../theme/AppTheme';

interface DetailsProps extends StackScreenProps<RootStackParamList, "Details"> { }

export const DetailsScreen = ({ navigation, route }: DetailsProps) => {
    const pokemon = route.params;
    return (
        <>
            <View style={{ ...styles.container, backgroundColor: pokemon.color }}>
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back-outline" size={40} color="white" />
                    </TouchableOpacity>
                    <Text style={globalStyles.pokemonTitle}>{pokemon.name}</Text>
                </View>
                <Image source={require("../assets/white-pokeball.png")} style={styles.pokeBall} />
                <View style={{ width: 250, height: 250 }}>
                    <Image source={{ uri: pokemon.picture }} style={styles.pokeImage} />
                </View>
            </View>
            <PokeDetails pokemon={pokemon}></PokeDetails>
            <Image source={require("../assets/pokeball.png")} style={styles.pokeBallDark} />
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 0.4,
        height: 370,
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomLeftRadius: 300,
        borderBottomRightRadius: 300
    },
    pokeImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -30,
        zIndex: 1
    },
    pokeBall: {
        width: 500,
        height: 500,
        position: 'absolute',
        bottom: -20,
        // transform: [{rotate: '45deg'}],
        opacity: 0.3
    },
    pokeBallDark: {
        width: 500,
        height: 500,
        position: 'absolute',
        bottom: -150,
        right: -50,
        // transform: [{rotate: '45deg'}],
        opacity: 0.3
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10,
        alignSelf: 'stretch',
        zIndex: 2
    }
});