import { View, Text } from 'react-native'
import React from 'react'

import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import NavigationScreens from './NavigationScreens';
import { NavigationContainer } from '@react-navigation/native';



const NavigationRoot = () => {

    return (
        <NavigationContainer>
            <NavigationScreens />
        </NavigationContainer>
    )
}

export default NavigationRoot