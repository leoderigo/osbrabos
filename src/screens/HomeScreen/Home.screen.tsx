import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native'

import { RootStackParamsList } from '../../navigation'
import { useSelector } from 'react-redux'
import { useAuthSelector } from '../../hooks/useAuthSelector'
import { clearUserData } from '../../store/auth.store'
import SafeStorage from '../../services/SafeStorage.service'


const HomeScreen = (props: NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>) => {
    const { navigation } = props
    const userProfile = useAuthSelector(state => state.userProfile)

    const onPressLogout = () => {
        clearUserData()
        SafeStorage.removeMany([
            'authToken',
            'userProfile'
        ])
        navigation.navigate('LoginScreen')
    }

    // useEffect()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* {userProfile?.photoLink && <Image ={userProfile?.photoLink} />} */}
            <Text style={{ padding: 20 }}>Nome: {userProfile?.name ?? 'Carregando'}</Text>
            <View style={{ flexDirection: 'row', paddingHorizontal: 40 }}>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: 'yellow', padding: 10, borderRadius: 35, alignItems: 'center', justifyContent: 'center', elevation: 3 }}
                    onPress={onPressLogout}
                >
                    <Text>SAIR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen
