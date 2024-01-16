import React from 'react'
import { HomeStackNavigator } from './HomeStackNavigator';
import { SearchScreen } from '../screens/SearchScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/Ionicons";
import { Platform } from 'react-native';
import { globalStyles } from '../theme/AppTheme';
import { SearchStackNavigator } from './SearchStackNavigator';


const Tab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return (
        <Tab.Navigator shifting barStyle={{ backgroundColor: "white", height: 80, opacity: Platform.OS === 'ios' ? 0.9 : 0.7, position: 'absolute' }}>
            <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} options={{ tabBarIcon: () => <Icon name='list-outline' color={globalStyles.tertiary.color} size={25} /> }} />
            <Tab.Screen name="SearchScreen" component={SearchStackNavigator} options={{ tabBarIcon: () => <Icon name='search-outline' color={globalStyles.tertiary.color} size={25} /> }} />
        </Tab.Navigator>
    )
}