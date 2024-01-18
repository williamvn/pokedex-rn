import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import { SearchInput } from '../components/SearchInput'
import { useAllPokemons } from '../hooks/useAllPokemons'
import { globalStyles } from '../theme/AppTheme';
import { PokeCard } from '../components/PokeCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PokeInfo } from '../types/PokemonApiResponse'


export const SearchScreen = () => {
  const { pokemons, isLoading } = useAllPokemons();
  const [filteredPokemons, setFilteredPokemons] = useState<PokeInfo[]>([]);
  const [listOpacity, setListOpacity] = useState(1);

  const filterPokemons = (value: string) => {
    const parsedValue = value.toLowerCase().trim();
    if(!value) {
      setFilteredPokemons(pokemons);
    }
    else if (isNaN(Number(parsedValue))) {
      setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(parsedValue)))
    }
    else {
      setFilteredPokemons(pokemons.filter(pokemon => pokemon.id === parsedValue));
    }
  };

  useEffect(() => {
    console.log("Init Filtered Pokemons")
    setFilteredPokemons(pokemons);
  }, [pokemons])

  const { top } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center' }}>
      <SearchInput
        valueChange={filterPokemons}
        onFocus={() => setListOpacity(0.5)}
        onFocusOut={() => setListOpacity(1)}
      />
      <Image source={require("../assets/pokeball.png")} style={styles.image} />

      {!isLoading && filteredPokemons.length === 0 &&
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
          <Image source={require("../assets/pikachu-intro.png")} style={styles.notFoundImage} />
          <Text style={{ ...globalStyles.text, marginTop: 300 }}> No pokemons found. Try something else</Text>
        </View>
      }
      {filteredPokemons.length > 0 && <FlatList
        style={{ opacity: listOpacity }}
        ListHeaderComponent={<View style={{ marginTop: top + 70 }}></View>}
        data={filteredPokemons}
        renderItem={({ item }) => <PokeCard key={`search#${item.id}`} pokemon={item} size='small' />}
        numColumns={2}
        ListFooterComponent={() => <View style={{ marginBottom: 100 }}></View>}
      />}
      {isLoading &&
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator color={globalStyles.primary.color} size={50} style={{ alignSelf: 'center' }} />
        </View>
      }
    </KeyboardAvoidingView>
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
  },
  notFoundImage: {
    width: 207,
    height: 217,
    opacity: 0.8,
    // top: 300,
    marginLeft: 20,
    position: 'absolute'
  }
});