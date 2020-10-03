import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { images } from '../styles/global';

export function HeaderTitle () {
  return (
    <View style={styles.titleContainer}>
      <Image source={images.logo} style={styles.logo}/>
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
        style={styles.icon} 
        onPress={() => menuPressHandler()} />
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 26,
    height: 26,
    marginRight: 10
  },
  headerText: {
    fontFamily: 'Oswald-Bold',
    fontSize: 25,
    letterSpacing: 1,
  },
  icon: {
    padding: 12,
  }
})