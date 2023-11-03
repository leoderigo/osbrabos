import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/LoginScreen'
import { RootStackParamsList } from '.'
import HomeTabNavigator from './HomeTabs.navigator'

const Stack = createNativeStackNavigator<RootStackParamsList>()


const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='HomeNavigator' component={HomeTabNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator
