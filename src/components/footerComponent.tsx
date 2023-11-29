import * as React from 'react';
import { View, Text } from 'react-native';

export default function FooterComponent() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        padding:10
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by React Animations ,2023
      </Text>
    </View>
  );
}