import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

import { HomeTabParamsList, RootStackParamsList } from '../../navigation'
import { useAuthSelector } from '../../hooks/useAuthSelector'
import { clearUserData } from '../../store/auth.store'
import SafeStorage from '../../services/SafeStorage.service'


const MatchScreen = (props: BottomTabScreenProps<HomeTabParamsList, 'MatchScreen'>) => {
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
            navigation.getParent<NativeStackNavigationProp<RootStackParamsList>>().navigate('LoginScreen')
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

export default MatchScreen
