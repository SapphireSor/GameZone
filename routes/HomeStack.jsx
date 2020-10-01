import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import {HeaderTitle, HeaderIcon} from '../shared/Header';

const Stack = createStackNavigator();

export default function HomeStack ({navigation}) {
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
