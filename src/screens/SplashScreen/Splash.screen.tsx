import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'

import { RootStackParamsList } from '../../navigation'
import SafeStorage from '../../services/SafeStorage.service'
import ErrorHandler from '../../services/ErrorHandler.service'
import { setAuthToken, setUserProfile,  } from '../../store/auth.store'
import { UserProfile } from '../../types/authStore/UserProfile'

const logo = require('../../../assets/images/logo-black.png')


const SplashScreen = (props: NativeStackScreenProps<RootStackParamsList, 'SplashScreen'>) => {
    const { navigation } = props

    useEffect(() => {
        Promise.all([
            SafeStorage.get<string>('authToken'),
            SafeStorage.get<UserProfile>('userProfile'),
        ])
        .then(setAuthObj)
        .catch(redirectToLogin)
    }, [])

    function setAuthObj(param: [string | null, UserProfile | null]) {
        const [token, userProfile] = param
        if (!token || !userProfile) throw 'User data not found'

        setUserProfile(userProfile)
        setAuthToken(token)
        navigation.navigate('HomeScreen')
    }

    function redirectToLogin(err?: any) {
        if (err) ErrorHandler.handle(err)
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ transform: [{ scale: .20 }] }} source={logo} />
        </View>
    )
}

export default SplashScreen
