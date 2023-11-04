import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { HomeTabParamsList, RootStackParamsList } from '../../navigation'
import { useAuthSelector } from '../../hooks/useAuthSelector'
import { clearUserData } from '../../store/auth.store'
import SafeStorage from '../../services/SafeStorage.service'
import Colors from '../../constants/Colors'
import EmptyRoomList from './EmptyRoomList'


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
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <View style={{ flex: 1 }} />
                <View style={{ padding: 20 }}>
                    <IonIcon name='notifications-outline' size={25} color={Colors.black} />
                </View>
            </View>

            {/* Content */}
            <View style={{ flex: 1 }}>
                <EmptyRoomList/>
            </View>
        </View>
    )
}

export default MatchScreen
