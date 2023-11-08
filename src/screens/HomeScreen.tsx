import React from 'react'
import { MenuList } from '../components/MenuList';
import { SafeAreaView } from 'react-native';
import { MenuOption } from '../types/menuOption';

export const HomeScreen = () => {
  const menuItems: MenuOption[] = [
    {
      name: "Animation 101",
      icon: "rocket-outline",
      component: "SomeComponent"
    },
    {
      name: "Inputs",
      icon: "home-outline",
      component: "SomeComponent"
    },
    {
      name: "Forms",
      icon: "car-outline",
      component: "SomeComponent"
    },
  ]


  return (
    <SafeAreaView style={{flex: 1}}>
      <MenuList menuItems={menuItems} title='Components'></MenuList>
    </SafeAreaView>
  )
}

