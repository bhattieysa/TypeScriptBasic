import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import BasicFunctionalComponent from './src/components/BasicFunctionalComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Cart from './src/screens/Cart';

export type RootStackParamsList = {
  Home: undefined,
  Profile: {
    name:string,
    email:string
  },
  Cart: undefined
}


const Stack = createNativeStackNavigator<RootStackParamsList>()
const App = () => {


  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}


export default App;
