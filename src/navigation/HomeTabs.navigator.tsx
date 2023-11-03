import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { HomeTabParamsList } from '.'
import MatchScreen from '../screens/MatchScreen'

const BottomTab = createBottomTabNavigator<HomeTabParamsList>()


const HomeTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen name='MatchScreen' component={MatchScreen} />
        </BottomTab.Navigator>
    )
}

export default HomeTabNavigator

export type HomeTabNavigatorParams = {
    
}
