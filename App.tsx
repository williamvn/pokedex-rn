import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { TabsNavigator } from './src/navigators/TabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} translucent={true} />
      {/* <StackNavigator /> */}
      <TabsNavigator />
    </NavigationContainer>
  )
}

export default App;