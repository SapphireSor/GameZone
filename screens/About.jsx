import React from 'react';
import { Text, View } from 'react-native';
import { gobalStyles } from '../styles/global'


export default function About() {
  return (
    <View style={gobalStyles.container}>
      <Text style={gobalStyles.titleText}>About Page!</Text>
    </View>
  );
}
