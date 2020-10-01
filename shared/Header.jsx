import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export function HeaderTitle () {
  return (
    <View>
      <Text style={styles.headerText}>GameZone</Text>
    </View>
  )
}

export function HeaderIcon ({ navigation }) {
  const menuPressHandler = () => {
    navigation.openDrawer()
  }

  return (
    <View>
      <Entypo 
        name="menu" 
        size={30} 
        color="#fff" 
        style={styles.icon} 
        onPress={() => menuPressHandler()} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    color: '#fff',
    fontFamily: 'Oswald-Bold',
    fontSize: 20,
    letterSpacing: 1,
  },
  icon: {
    padding: 12,
  }
})