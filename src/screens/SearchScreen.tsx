import React from 'react'
import { ActivityIndicator, FlatList, Image, StyleSheet, View } from 'react-native'
import { SearchInput } from '../components/SearchInput'
import { useAllPokemons } from '../hooks/useAllPokemons'
import { globalStyles } from '../theme/AppTheme'
import { PokeCard } from '../components/PokeCard'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


export const SearchScreen = () => {
  const { pokemons, isLoading } = useAllPokemons();
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <SearchInput />
      <Image source={require("../assets/pokeball.png")} style={styles.image} />
      <FlatList
        ListHeaderComponent={<View style={{marginTop: top + 70}}></View>}
        data={pokemons}
        renderItem={({ item }) => <PokeCard key={`search#${item.id}`} pokemon={item} size='small' />}
        onEndReachedThreshold={0.5}
        numColumns={2}
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