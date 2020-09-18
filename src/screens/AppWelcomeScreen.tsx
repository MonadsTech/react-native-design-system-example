import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackScreen} from '../modules/stack/StackScreen';

// import {APP_ROUTES} from '../routers/routes';

export const AppWelcomeScreen = () => {
  return (
    <View style={[styles.root]}>
      <View style={styles.topView}>
        <Text style={styles.Title}>{'React Native Design System'}</Text>
      </View>
      <StackScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screenRoot: {flex: 1, backgroundColor: 'white'},
  root: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  topView: {
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  Title: {
    // marginBottom: 8,
    fontSize: 21,
    lineHeight: 24,
    color: '#121212',
    fontWeight: 'bold',
  },
  separator: {borderBottomWidth: 1, width: 76, height: 0},
});
