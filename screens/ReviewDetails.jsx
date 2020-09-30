import React from 'react';
import { Button, Text, View } from 'react-native';
import { gobalStyles } from '../styles/global'


export default function ReviewDetails({ route, navigation }) {
  const { rating, content } = route.params 
  return (
    <View style={gobalStyles.container}>
      <Text style={gobalStyles.titleText}>Review Detail Page!</Text>
      <Text style={gobalStyles.titleText}>{content}</Text>
      <Button title='go back' onPress={() => navigation.goBack()}/>
    </View>
  );
}