import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../Screens/LandingScreen';
import SearchScreen from '../Screens/SearchScreen';
import Notification from '../Screens/Notification';

const Stack = createStackNavigator();

class HomeStack extends Component {
  render() {
    return (

      <Stack.Navigator initialRouteName="LandingScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
        />
      </Stack.Navigator>


    );
  }
}

export default HomeStack;
