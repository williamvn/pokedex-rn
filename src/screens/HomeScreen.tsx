import React from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemons } from '../hooks/usePokemons';
import { PokeCard } from '../components/PokeCard';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemons, loadPokemons, isLoading } = usePokemons();

  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/pokeball.png")} style={styles.image} />
      <View style={globalStyles.container}>
        <Text style={{ ...globalStyles.textHeader, marginTop: top }}>Pokedex</Text>
        <FlatList
          data={pokemons}
          renderItem={({ item }) => <PokeCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.5}
          ListFooterComponent={<View style={{ height: 130 }}>
            {isLoading && <ActivityIndicator size={25} color={"grey"} />}
          </View>}
        />
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

