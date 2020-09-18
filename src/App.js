import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {AppRouter} from './router/AppRouter';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);

export const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <AppRouter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
