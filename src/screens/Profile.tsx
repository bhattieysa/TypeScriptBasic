import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../App'
import { useRoute } from '@react-navigation/native'
interface ProfileScreenProps{
  navigation:NativeStackNavigationProp<RootStackParamsList,'Profile'>
}
const Profile = ({navigation}:ProfileScreenProps) => {
  const route=useRoute()
  console.log(route)
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile