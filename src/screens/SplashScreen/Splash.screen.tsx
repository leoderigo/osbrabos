import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

import { RootStackParamsList } from '../../navigation'
import SafeStorage from '../../services/SafeStorage.service'
import ErrorHandler from '../../services/ErrorHandler.service'
import { setAuthToken, setUserProfile,  } from '../../store/auth.store'
import { UserProfile } from '../../types/authStore/UserProfile'
import { useAuthDispatch } from '../../hooks/useAuthDispatch'

const logo = require('../../../assets/images/logo-black.png')


const SplashScreen = (props: NativeStackScreenProps<RootStackParamsList, 'SplashScreen'>) => {
    const { navigation } = props
    const authDispatch = useAuthDispatch()

    useEffect(() => {
        Promise.all([
            SafeStorage.get<string>('authToken'),
            SafeStorage.get<UserProfile>('userProfile'),
            configureGoogleSign()
        ])
        .then(setAuthObj)
        .catch(redirectToLogin)
    }, [])

    async function configureGoogleSign() {
        GoogleSignin.configure({
            // offlineAccess: true,
            // forceCodeForRefreshToken,

        })
    }

    function setAuthObj(param: [string | null, UserProfile | null, void]) {
        const [token, userProfile] = param
        // if (!token || !userProfile) throw 'User data not found'
        if (!userProfile) throw 'User data not found'

        authDispatch(setUserProfile(userProfile))
        // setAuthToken(token)
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
