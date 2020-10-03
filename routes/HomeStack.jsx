import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import {HeaderTitle, HeaderIcon} from '../shared/Header';
import { Image } from 'react-native';
import { images } from '../styles/global';

const Stack = createStackNavigator();

export default function HomeStack ({navigation}) {
  return (
    <Stack.Navigator screenOptions={{
      
      headerBackground: () => (
        <Image source={images.haderBackground} style={{width: '100%', height: ' 100%'}}/>
      ),
      headerTitleStyle: {
        fontFamily: 'Oswald-Bold',
        fontSize: 25
      },
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerTitle: () => <HeaderTitle />,
            headerLeft: () => <HeaderIcon navigation={navigation} />
          }}/>
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  )
}
