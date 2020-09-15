import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import {APP_ROUTES} from '../routers/routes';

export const AppWelcomeScreen = ({navigation}) => {
  return (
    <View style={[styles.root]}>
      <View style={styles.topView}>
        <Text style={styles.Title}>
          {'Welcome to the\nworld of React Native Design System'}
        </Text>

        <View style={styles.separator} />
      </View>
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
    flex: 3,
    paddingBottom: 24,
    paddingTop: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  Title: {
    // marginBottom: 8,
    fontSize: 30,
    lineHeight: 36,
    color: '#121212',
    fontWeight: 'bold',
  },
  separator: {borderBottomWidth: 1, width: 76, height: 0},
});
