import React from 'react'
import { StackNavigator } from './StackNavigator';
import { SearchScreen } from '../screens/SearchScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from 'react-native';


const Tab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return (
        <Tab.Navigator shifting barStyle={{ backgroundColor: "white", height: 80, opacity: Platform.OS === 'ios' ? 0.9 : 0.7, position: 'absolute' }}>
            <Tab.Screen name="StackNavigatorScreen" component={StackNavigator} options={{ tabBarIcon: () => <Icon name='list-outline' size={25} /> }} />
            <Tab.Screen name="SearchScreen" component={SearchScreen} options={{ tabBarIcon: () => <Icon name='search-outline' size={25} /> }} />
        </Tab.Navigator>
    )
}