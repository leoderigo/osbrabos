import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text, ToastAndroid, View } from 'react-native'
import { GoogleSignin, GoogleSigninButton, User, statusCodes } from '@react-native-google-signin/google-signin'

import { RootStackParamsList } from '../../navigation'
import ErrorHandlerService from '../../services/ErrorHandler.service'
import { setUserProfile } from '../../store/auth.store'
import SafeStorage from '../../services/SafeStorage.service'
import { UserProfile } from '../../types/authStore/UserProfile'
import { useAuthDispatch } from '../../hooks/useAuthDispatch'

const messages = {
    [statusCodes.IN_PROGRESS]: { userMessage: null, action: () => console.log('login already in progress') },
    [statusCodes.PLAY_SERVICES_NOT_AVAILABLE]: { userMessage: 'Google indisponível', action: () => console.log('play services unavailable') },
    [statusCodes.SIGN_IN_CANCELLED]: { userMessage: null, action: () => console.log('login cancelled by user') },
    [statusCodes.SIGN_IN_REQUIRED]: { userMessage: null, action: () => console.log('login required') },
}

function handleUnrecognizedError(err?: any) {
    console.log('Erro durante o signin do google: ', err)
    ToastAndroid.show('Um erro desconhecido aconteceu', ToastAndroid.SHORT)
    ErrorHandlerService.handle(err)
}


const LoginScreen = (props: NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>) => {
    const { navigation } = props
    const authDispatch = useAuthDispatch()

    const onPressLogin = () => {
        GoogleSignin.signIn()
        .then(handleUserInfo)
        .catch(handleError)
    }

    function handleUserInfo(userInfo: User) {
        const {
            user,
            idToken
        } = userInfo

        const userProfile: UserProfile = {
            lastName: user.familyName,
            name: user.givenName,
            photoLink: user.photo,
            email: user.email
        }

        authDispatch(setUserProfile(userProfile))

        SafeStorage.set('userProfile', userProfile)
        SafeStorage.set('authToken', idToken)

        navigation.navigate('HomeScreen')
    }

    function handleError(err?: any) {
        const errorCode = err.code
        
        if (errorCode) {
            console.log('errorCode', err)
            const message = messages[errorCode]

            if (!message) return handleUnrecognizedError(err)

            const userMessage = message.userMessage
            if (userMessage) ToastAndroid.show(userMessage, ToastAndroid.SHORT)
            message.action()
            return
        }

        handleUnrecognizedError(err)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login</Text>
            <GoogleSigninButton onPress={onPressLogin} />
        </View>
    )
}

export default LoginScreen
