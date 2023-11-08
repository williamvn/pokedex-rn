import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigator } from './src/navigators/StackNavigator';
import { SafeAreaViewComponent } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;