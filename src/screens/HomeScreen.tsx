import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemons } from '../hooks/usePokemons';
import { PokeList } from '../components/PokeList';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemons } = usePokemons();

  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/pokeball.png")} style={styles.image} />
      <View style={globalStyles.container}>
        <Text style={{ ...globalStyles.textHeader, marginTop: top }}>Pokedex</Text>
        <PokeList pokemons={pokemons} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    position: 'absolute',
    opacity: 0.5,
    right: -100,
    top: -100
  }
});

