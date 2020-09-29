import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReviewDetail() {
  return (
    <View style={styles.container}>
      <Text>Review Detail Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
