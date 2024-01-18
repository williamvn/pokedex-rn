import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, TextInput, View, Text, Keyboard } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRef } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const { width: screenWidth } = Dimensions.get('screen');

interface SearchInputProps {
    valueChange?: (v: string) => void;
    onFocus?: () => void;
    onFocusOut?: () => void;
}

export const SearchInput = ({ valueChange, onFocus, onFocusOut }: SearchInputProps) => {
    const { top } = useSafeAreaInsets();
    const [barOpacity, setBarOpacity] = useState(0.7);
    const [text, setText] = useState('');
    const debounceValue = useDebounce(text, 200);
    const inputRef = useRef<TextInput>(null);

    const onFocusHandler = () => {
        setBarOpacity(1);
        if (onFocus) onFocus();
    }

    const onFocusOutHandler = () => {
        setBarOpacity(0.7);
        if (onFocusOut) onFocusOut();
    }

    useEffect(() => {
        if (valueChange) {
            valueChange(debounceValue);
        }
    }, [debounceValue]);

    useEffect(() => {
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                onFocusOutHandler();
                inputRef.current?.blur();
            }
        );

        return () => {
            keyboardDidHideListener.remove();
        };
    }, []);


    return (
        <View style={{ ...styles.inputContainer, marginTop: top + 10 }}>
            <TextInput
                ref={inputRef}
                style={{ ...styles.input, opacity: barOpacity, ...globalStyles.text }}
                onChangeText={setText}
                value={text}
                autoCorrect={false}
                onFocus={onFocusHandler}
                // onEndEditing={onFocusOutHandler}
                placeholder="Search Pokemons"
                placeholderTextColor={globalStyles.tertiary.color}
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