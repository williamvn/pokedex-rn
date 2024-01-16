import React, { useState } from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef } from 'react';

const { width: screenWidth } = Dimensions.get('screen');

export const SearchInput = () => {
    const { top } = useSafeAreaInsets();
    const [barOpacity, setBarOpacity] = useState(0.7);
    
    return (
        <View style={{ ...styles.inputContainer, marginTop: top + 10 }}>
            <TextInput
                style={{ ...styles.input, opacity: barOpacity }}
                // onChangeText={valueChange}
                // value={value}
                autoCorrect={false}
                onFocus={() => setBarOpacity(1)}
                onBlur={() => setBarOpacity(0.7)}
                placeholder="Search Pokemons"
            />
            <Icon name='search-outline' color={globalStyles.secondary.color} style={styles.inputIcon} size={25} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginBottom: 10
    },
    inputContainer: {
        width: screenWidth - 20,
        position: 'absolute',
        marginHorizontal: 10,
        zIndex: 3
    },
    inputIcon: {
        position: 'absolute', right: 10, top: 7
    },
    input: {
        height: 40,
        padding: 10,
        //   borderWidth: 0.1,
        borderRadius: 20,
        backgroundColor: "white",
        //   borderColor: globalStyles.secondary.color,
    },
});