import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';


export type RootStackParamsList = {
  Home: undefined,
  Profile: {
    name:string,
    email:string
  },

}


const Stack = createNativeStackNavigator<RootStackParamsList>()
const App = () => {



  return (
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
      
      </Stack.Navigator>

    </NavigationContainer>


  );
}


export default App;
