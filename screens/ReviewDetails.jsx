import React from 'react';
import { Text, View } from 'react-native';
import Card from '../shared/Card';
import { gobalStyles } from '../styles/global'


export default function ReviewDetails({ route }) {
  const { rating, content } = route.params 
  return (
    <View style={gobalStyles.container}>
      <Card>
        <Text style={gobalStyles.titleText}>Review Detail Page!</Text>
        <Text style={gobalStyles.titleText}>{content}</Text>
        <Text style={gobalStyles.titleText}>{rating}</Text>
      </Card>
    </View>
  );
}