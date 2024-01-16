import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, View } from 'react-native'
import { SearchInput } from '../components/SearchInput'
import { useAllPokemons } from '../hooks/useAllPokemons'
import { globalStyles } from '../theme/AppTheme'
import { PokeCard } from '../components/PokeCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PokeInfo } from '../types/PokemonApiResponse'


export const SearchScreen = () => {
  const { pokemons, isLoading } = useAllPokemons();
  const [filteredPokemons, setFilteredPokemons] = useState<PokeInfo[]>([]);
  const [listOpacity, setListOpacity] = useState(1);

  const filterPokemons = (value: string) => {
    const parsedValue = value.toLowerCase().trim();
    if( isNaN(Number(parsedValue))) {
      setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(parsedValue)))
    }
    else {
      setFilteredPokemons(pokemons.filter(pokemon => pokemon.id === parsedValue));
    }
  };

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons])

  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <SearchInput 
        valueChange={filterPokemons} 
        onFocus={() => setListOpacity(0.5)} 
        onFocusOut={() => setListOpacity(1)}
        />
      <Image source={require("../assets/pokeball.png")} style={styles.image} />
      <FlatList
        style={{ opacity: listOpacity }}
        ListHeaderComponent={<View style={{ marginTop: top + 70 }}></View>}
        data={filteredPokemons}
        renderItem={({ item }) => <PokeCard key={`search#${item.id}`} pokemon={item} size='small' />}
        numColumns={2}
        ListFooterComponent={() => <View style={{marginBottom: 100}}></View>}
      />
      {isLoading &&
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator color={globalStyles.primary.color} size={50} style={{ alignSelf: 'center' }} />
        </View>
      }
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