import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, View } from 'react-native'

import { RootStackParamsList } from '../../navigation'


const LoginScreen = (props: NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login</Text>
        </View>
    )
}

export default LoginScreen
