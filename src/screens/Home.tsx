import { View, Text } from 'react-native'
import React, { useReducer, useRef, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import ROUTES from '../ROUTES'
import RootStackParams from '../types/navigationStack/RootStackParams'

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParams, 'Home'>
}
//Interface for objects
interface user {
  name: string,
  age: number
}
interface item {
  name: string,
  price: number
}
// useReducer implementation
type MyState = {
  count: number
}
const initialState: MyState = {
  count: 0
}
type Action = {
  type: 'INCREMENT' | 'DECREMENT'
}

const reducer = (state: MyState, action: Action): MyState => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    default :
     return state;
  }
}

const Home = ({ navigation }: HomeScreenProps) => {

  const [counter, setCounter] = useState<number>(0)
  const [name, setName] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [details, setDetails] = useState<null>(null)
  //object state defination in TS
  const [user, setUser] = useState<user>({ name: '', age: 0 })
  //array state defination in TS
  const [items, setItem] = useState<item[]>([])
  //reference defination in TS
  const ref = useRef<Text>(null)

  const [state, dispatch] = useReducer(reducer,initialState)


  return (
    <View>
      <Text ref={ref} onPress={() => {

        navigation.navigate(ROUTES.PROFILE, { name: 'eysa azhar', email: 'eysaazhar@yahoo.com' });
      }}>Home</Text>
      <Text onPress={()=>{
        dispatch({type:'INCREMENT'})
      }}>{state.count}</Text>
    </View>
  )
}

export default Home