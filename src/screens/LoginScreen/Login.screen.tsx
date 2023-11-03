import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, Text, View } from 'react-native'

import { RootStackParamsList } from '../../navigation'
import ButtonLogin from './ButtonLogin'
import Colors from '../../constants/Colors'

const imageLogin = require('../../../assets/images/logo-login.png')


const LoginScreen = (props: NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>) => {
    const { navigation } = props

    const onLoginSuccess = () => {
        navigation.navigate('HomeNavigator')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary }}>
            <View style={{ flex: 1, backgroundColor: Colors.white, marginTop: 120, borderRadius: 10, width: '80%' }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', padding: 20 }}>OSBRABO</Text>
                <Image source={imageLogin} style={{ marginBottom: 80 }} />
                <View style={{ flexDirection: 'row', padding: 30 }}>
                    <ButtonLogin onSuccess={onLoginSuccess} />
                </View>
                <View style={{ flex: 1 }} />
            </View>
        </View>
    )
}

export default LoginScreen
