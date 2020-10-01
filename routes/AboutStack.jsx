import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import {HeaderTitle, HeaderIcon} from '../shared/Header';


const Stack = createStackNavigator();

export default function AboutStack ({navigation}) {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
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