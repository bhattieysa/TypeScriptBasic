import { View, Text } from 'react-native'
import React from 'react'
import SCREENS from '../../SCREENS'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import RootStackParams from '../../types/navigationStack/RootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>()
const NavigationScreens = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SCREENS.HOME.ROOT} component={Home} />
            <Stack.Screen name={SCREENS.HOME.PROFILE} component={Profile} />
        </Stack.Navigator>
    )
}

export default NavigationScreens