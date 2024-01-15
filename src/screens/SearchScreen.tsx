import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { SearchInput } from '../components/SearchInput'


export const SearchScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchInput />
      <Image source={require("../assets/pokeball.png")} style={styles.image} />
      
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