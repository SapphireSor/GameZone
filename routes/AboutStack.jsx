import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import {HeaderTitle, HeaderIcon} from '../shared/Header';
import { Image } from 'react-native';
import { images } from '../styles/global';


const Stack = createStackNavigator();

export default function AboutStack ({navigation}) {
  return (
    <Stack.Navigator screenOptions={{
      headerBackground: () => (
        <Image source={images.haderBackground} style={{width: '100%', height: ' 100%'}} />
      ),
      headerTitleStyle: {
        fontFamily: 'Oswald-Bold',
      },
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen 
          name="About" 
          component={About}
          options={{
            headerTitle: () => <HeaderTitle />,
            headerLeft: () => <HeaderIcon navigation={navigation} />
          }}/>
    </Stack.Navigator>
  )
}