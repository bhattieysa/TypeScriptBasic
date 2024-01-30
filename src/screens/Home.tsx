import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import ROUTES from '../ROUTES'
import RootStackParams from '../types/navigationStack/RootStackParams'

interface HomeScreenProps{
    navigation:NativeStackNavigationProp<RootStackParams,'Home'>
}
const Home = ({navigation}:HomeScreenProps) => {

  return (
    <View>
      <Text onPress={()=>{

       navigation.navigate(ROUTES.PROFILE,{name: 'eysa azhar', email: 'eysaazhar@yahoo.com' });
      }}>Home</Text>
    </View>
  )
}

export default Home