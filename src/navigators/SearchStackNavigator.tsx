import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screens/DetailsScreen';
import { PokeInfo } from '../types/PokemonApiResponse';
import { SearchScreen } from '../screens/SearchScreen';

export type RootStackParamList = {
  Home: undefined,
  Details: PokeInfo
}

const Stack = createStackNavigator<RootStackParamList>();

export const SearchStackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={SearchScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}