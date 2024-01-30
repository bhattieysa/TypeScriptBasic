import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../../App'
interface CartScreenProps{
  navigation:NativeStackNavigationProp<RootStackParamsList,'Cart'>
}
const Cart = ({navigation}:CartScreenProps) => {
  return (
    <View>
      <Text>Cart</Text>
    </View>
  )
}

export default Cart