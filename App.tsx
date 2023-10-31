import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native'
import { RootNavigator } from './src/navigation';
import { Provider } from 'react-redux';

import authStore from './src/store/auth.store';


function App(): JSX.Element {
  const isDarkMode = false

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={authStore}>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App
