import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails'
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo'

export default function App() {
  let [fontsLoaded] = useFonts({
    'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
    'Oswald-SemiBold': require('./assets/fonts/Oswald-SemiBold.ttf'),
    'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
  });

  const Stack = createStackNavigator();

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily:'Oswald-Bold',
          },
        }}>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }} />
          <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
}
