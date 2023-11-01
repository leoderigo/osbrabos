import React from 'react'
import { Text, ToastAndroid, TouchableOpacity } from 'react-native'
import { GoogleSignin, User, statusCodes } from '@react-native-google-signin/google-signin'

import ErrorHandlerService from '../../../services/ErrorHandler.service'
import styles from './styles'
import SafeStorage from '../../../services/SafeStorage.service'
import { setUserProfile } from '../../../store/auth.store'
import { UserProfile } from '../../../types/authStore/UserProfile'
import { useAuthDispatch } from '../../../hooks/useAuthDispatch'
import { ButtonLoginProps } from '.'

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


const ButtonLogin = (props: ButtonLoginProps) => {
    const { onFail, onSuccess } = props
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

        onSuccess?.()
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
        onFail?.()
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPressLogin}>
            <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
    )
}

export default ButtonLogin
