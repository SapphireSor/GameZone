import React from 'react';
import { View } from 'react-native';
import Home from './screens/Home';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'Oswald-SemiBold': require('./assets/fonts/Oswald-SemiBold.ttf'),
    'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View>
        <Home />
      </View>
    )
  }
  
}
