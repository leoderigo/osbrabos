import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native'

import { RootStackParamsList } from '../../navigation'
import { useSelector } from 'react-redux'
import { useAuthSelector } from '../../hooks/useAuthSelector'
import { clearUserData } from '../../store/auth.store'
import SafeStorage from '../../services/SafeStorage.service'
import { GoogleSignin } from '@react-native-google-signin/google-signin'


const HomeScreen = (props: NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>) => {
    const { navigation } = props
    const userProfile = useAuthSelector(state => state.userProfile)
    const [loading, setLoading] = useState(false)

    const onPressLogout = () => {
        setLoading(true)
        GoogleSignin.signOut()
        .then(() => {
            clearUserData()
            SafeStorage.removeMany([
                'authToken',
                'userProfile'
            ])
            navigation.navigate('LoginScreen')
        })
        .finally(() => setLoading(false))
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* {userProfile?.photoLink && <Image ={userProfile?.photoLink} />} */}
            <Text style={{ padding: 20 }}>Nome: {userProfile?.name ?? 'Carregando'}</Text>
            <View style={{ flexDirection: 'row', paddingHorizontal: 40 }}>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: 'yellow', padding: 10, borderRadius: 35, alignItems: 'center', justifyContent: 'center', elevation: 3 }}
                    onPress={onPressLogout}
                    disabled={loading}
                >
                    <Text>{loading ? 'Saindo...' : 'SAIR'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen
