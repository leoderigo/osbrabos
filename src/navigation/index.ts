import { MatchScreenProps } from '../screens/MatchScreen'
import { LoginScreenProps } from '../screens/LoginScreen'
import { SplashScreenProps } from '../screens/SplashScreen'

import RootNavigator from './Root.navigator'
import { HomeTabNavigatorParams } from './HomeTabs.navigator'

export type RootStackParamsList = {
    SplashScreen?: SplashScreenProps
    LoginScreen?: LoginScreenProps
    HomeNavigator?: HomeTabNavigatorParams
}

export type HomeTabParamsList = {
    MatchScreen?: MatchScreenProps
    // RoomScreen?: RoomScreenProps
    // ProfileScreem?: ProfileScreenProps
    // SettingScreen?: SettingScreenProps
}

export {
    RootNavigator
}
