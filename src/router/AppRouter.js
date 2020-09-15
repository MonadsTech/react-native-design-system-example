import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
  TransitionSpecs,
} from '@react-navigation/stack';

import {APP_ROUTES} from './routes';
import {AppWelcomeScreen} from '../screens/AppWelcomeScreen';

const Stack = createStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        backBehavior="initialRoute"
        initialRouteName={APP_ROUTES.APP_WELCOME}>
        <Stack.Screen
          name={APP_ROUTES.APP_WELCOME}
          component={AppWelcomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {AppRouter};
