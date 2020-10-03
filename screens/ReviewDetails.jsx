import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from '../shared/Card';
import { globalStyles, images } from '../styles/global'


export default function ReviewDetails({ route }) {
  const { rating, content } = route.params 
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>Review Detail Page!</Text>
        <Text style={globalStyles.titleText}>{content}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={images.rating[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
    marginTop: 16,
  }
})