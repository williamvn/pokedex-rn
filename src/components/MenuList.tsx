import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { globalStyles } from '../theme/AppTheme';
import { MenuOption } from '../types/menuOption';

interface MenuProps {
    menuItems: MenuOption[];
    title: string
}

export const MenuList = ({ menuItems, title }: MenuProps) => {
    const renderMenuItem = (item: MenuOption) => {
        return <View style={styles.option}>
            <Icon name={item.icon} size={30} color={"#949292"}/>
            <Text>{item.name}</Text>
        </View>
    }

    const listHeader = () => {
        return <View>
            <Text style={globalStyles.textHeader}>{title}</Text>
        </View>
    }

    return (
        <View style={{ flex: 0.3, margin: 20 }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => renderMenuItem(item)}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => listHeader()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})