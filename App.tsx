import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigator } from './src/navigators/StackNavigator';
import { SafeAreaViewComponent, StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} translucent={true}/>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;