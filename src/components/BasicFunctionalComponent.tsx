import { View, Text } from 'react-native'
import React from 'react'



interface MyProps {
    name: string,
    email: string,
    age: number
}

const BasicFunctionalComponent = (props:MyProps) => {

    return (
        <View>
            <Text>{props.name}&& {props.email} && {props.age}</Text>
        </View>
    )
}

export default BasicFunctionalComponent