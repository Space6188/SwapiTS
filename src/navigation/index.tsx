import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../utils/constants';
import HomeScreen from '../screens/Home/Home';
import DetailsScreen from '../screens/Details/Details';
import ClearBTN from '../screens/Home/components/ClearBTN';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {fontSize: 22, fontWeight: '300'},
          statusBarColor: '#fff',
          statusBarStyle: 'dark',
          headerShadowVisible: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name={Routes.HOME}
          options={{headerRight: () => <ClearBTN />}}
          component={HomeScreen}
        />
        <Stack.Screen name={Routes.DETAILS} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
