import React from 'react'
import { ActivityIndicator, Animated, Easing, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemons } from '../hooks/usePokemons';
import { PokeCard } from '../components/PokeCard';
import { useAnimation } from '../hooks/useAnimation';

export const HomeScreen = () => {
  const { pokemons, loadPokemons, isLoading } = usePokemons();
  const { value, animate } = useAnimation(1, Easing.ease);
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/pokeball.png")} style={styles.image} />
      <View style={{...globalStyles.container, marginTop: 0}}>
        <FlatList
          ListHeaderComponent={<Animated.View style={{ opacity: value }}><Text style={{ ...globalStyles.textHeader, marginTop: 50}}>Pokedex</Text></Animated.View>}
          data={pokemons}
          renderItem={({ item }) => <PokeCard pokemon={item} />}
          onEndReached={loadPokemons}
          onScroll={(y) => animate(1 - y.nativeEvent.contentOffset.y / 30, 10)}
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

