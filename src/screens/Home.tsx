import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../App'

interface HomeScreenProps{
    navigation:NativeStackNavigationProp<RootStackParamsList,'Home'>
}
const Home = ({navigation}:HomeScreenProps) => {

  return (
    <View>
      <Text onPress={()=>{
        navigation.navigate("Profile",{name:'eysa azhar',email:'eysaazhar@yahoo.com'})
      }}>Home</Text>
    </View>
  )
}

export default Home