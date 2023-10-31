import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'

import { RootStackParamsList } from '../../navigation'


const HomeScreen = (props: NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>) => {
    return (
        <View>
            <Text>HOME</Text>
        </View>
    )
}

export default HomeScreen
