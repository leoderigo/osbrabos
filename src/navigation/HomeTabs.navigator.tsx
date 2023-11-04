import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { HomeTabParamsList } from '.'
import MatchScreen from '../screens/MatchScreen'
import Colors from '../constants/Colors'

const BottomTab = createBottomTabNavigator<HomeTabParamsList>()


const HomeTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.primary, tabBarLabel: () => false }}>
            <BottomTab.Screen options={{ tabBarIcon: () => <IonIcon name='home' color={Colors.primary} size={25} /> }} name='MatchScreen' component={MatchScreen} />
        </BottomTab.Navigator>
    )
}

export default HomeTabNavigator

export type HomeTabNavigatorParams = {
    
}
