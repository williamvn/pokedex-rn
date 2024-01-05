import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { PokeInfo } from '../types/PokemonApiResponse';

export type RootStackParamList = {
  Home: undefined,
  Details: PokeInfo
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}