import { HomeScreenProps } from '../screens/HomeScreen'
import { LoginScreenProps } from '../screens/LoginScreen'
import { SplashScreenProps } from '../screens/SplashScreen'

import RootNavigator from './Root.navigator'

export type RootStackParamsList = {
    SplashScreen?: SplashScreenProps
    LoginScreen?: LoginScreenProps
    HomeScreen?: HomeScreenProps
}

export {
    RootNavigator
}
