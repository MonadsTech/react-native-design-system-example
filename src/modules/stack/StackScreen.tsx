import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';

// import {Stack, StackItem, StackProps} from '../Stack';

import {Stack, StackProps} from '@monadstech/react-native-design-system-view';

interface RandomViewProps {
  style: StyleProp<ViewStyle>;
}

const RandomView: React.FC<RandomViewProps> = ({style}, _) => {
  const height = Math.floor(Math.random() * 100);
  const width = Math.floor(Math.random() * 100);

  return <View style={[style, {height, width}]} />;
};

export const StackScreen = React.forwardRef<View, StackProps>((_, __) => {
  return (
    <View style={{flex: 1}}>
      <Stack style={{backgroundColor: '#132'}} gap={20} direction="horizontal">
        <RandomView style={{backgroundColor: '#f01'}} />
        <RandomView style={{backgroundColor: '#ff1'}} />
        <RandomView style={{backgroundColor: '#0f2'}} />
        <RandomView style={{backgroundColor: '#ff1'}} />
        <RandomView style={{backgroundColor: '#f01'}} />
        <RandomView style={{backgroundColor: '#0f2'}} />
        <RandomView style={{backgroundColor: '#ff1'}} />
        <RandomView style={{backgroundColor: '#f01'}} />
        <RandomView style={{backgroundColor: '#00f', flex: 1}} />
      </Stack>

      <Stack
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: '#767',
        }}
        gap={20}
        direction="vertical">
        <RandomView style={{backgroundColor: '#f01'}} />
        <RandomView style={{backgroundColor: '#ff1'}} />
        <RandomView style={{backgroundColor: '#0f2'}} />
        <RandomView style={{backgroundColor: '#ff1'}} />
        <RandomView style={{backgroundColor: '#f01'}} />
        <RandomView style={{backgroundColor: '#0f2'}} />
        <RandomView style={{backgroundColor: '#ff1'}} />
        <RandomView style={{backgroundColor: '#f01'}} />
        <RandomView style={{backgroundColor: '#00f', flex: 1}} />
      </Stack>
    </View>
  );
});
